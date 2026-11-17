import { expect, test } from '@playwright/test';

test('learner can switch countries while curriculum progress stays isolated', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('circuit-hunter-academy-v2:italy-national', JSON.stringify({
      grade: null,
      name: 'Italian learner',
      lang: 'en',
      xp: 135,
      subject: 'cs',
      unit: 0,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      grammarProgress: {},
      v: 5
    }));
  });
  await page.reload();

  await expect(page.getByRole('button', { name: /Italy/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('html')).toHaveAttribute('data-curriculum-theme', 'italian');
  await expect(page.getByTestId('sankofa-experience')).toHaveCount(0);
  await page.getByRole('button', { name: /Ghana/ }).click();
  await expect(page.getByRole('heading', { name: 'Your Sankofa journey begins here' })).toBeVisible();
  await expect(page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.grade-card[data-grade="grade9"]')).toContainText('SHS 1 (SS1)');
  await expect(page.locator('.grade-card[data-grade="grade10"]')).toContainText('SHS 2 (SS2)');
  await expect(page.locator('.grade-card[data-grade="grade11"]')).toContainText('SHS 3 (SS3)');
  await expect(page.locator('.grade-card')).toHaveCount(3);
  await expect(page.locator('.grade-card[data-grade="grade9"]')).toBeEnabled();
  await expect(page.locator('.grade-card[data-grade="grade10"]')).toBeEnabled();
  await expect(page.locator('.grade-card[data-grade="grade11"]')).toBeEnabled();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('[data-s="ghcoremath"]')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('data-curriculum-theme', 'sankofa');
  await expect(page.locator('.theme-sankofa')).toHaveAttribute('data-curriculum', 'ghana-nacca');
  await expect(page.getByText('Additional Mathematics', { exact: true })).toBeVisible();
  await page.locator('[data-s="ghcoremath"]').click();
  await page.locator('#nm').fill('Ghana Hunter');
  await page.getByRole('button', { name: /Begin your journey/ }).click();
  await expect(page.locator('h3').filter({ hasText: 'The Number Map' })).toBeVisible();
  await expect(page.locator('h3').filter({ hasText: 'The Market Percentage Challenge' })).toBeVisible();
  await expect(page.getByTestId('sankofa-experience')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sankofa – The Knowledge Quest' })).toBeVisible();
  await expect(page.locator('.sankofa-region')).toHaveCount(5);

  const sankofaContrast = await page.evaluate(() => {
    const parse = (value: string) => {
      const hex = value.trim().replace(/^#/, '');
      const full = hex.length === 3 ? hex.split('').map((part) => part + part).join('') : hex;
      const channels = [0, 2, 4].map((index) => parseInt(full.slice(index, index + 2), 16) / 255);
      const linear = channels.map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
      return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
    };
    const contrast = (foreground: string, background: string) => {
      const first = parse(foreground);
      const second = parse(background);
      return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
    };
    const styles = getComputedStyle(document.querySelector('.theme-sankofa')!);
    const background = '#fffaf0';
    return {
      muted: contrast(styles.getPropertyValue('--muted'), background),
      gold: contrast(styles.getPropertyValue('--gold'), background),
      ember: contrast(styles.getPropertyValue('--ember'), background)
    };
  });
  expect(sankofaContrast.muted).toBeGreaterThanOrEqual(4.5);
  expect(sankofaContrast.gold).toBeGreaterThanOrEqual(4.5);
  expect(sankofaContrast.ember).toBeGreaterThanOrEqual(4.5);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-curriculum-theme', 'sankofa');
  await expect(page.getByTestId('sankofa-experience')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sankofa – The Knowledge Quest' })).toBeVisible();
  await expect(page.locator('.sankofa-progress-heading').getByRole('heading', { name: 'Curious Seeker' })).toBeVisible();
  await page.locator('.mcard').filter({ hasText: 'The Number Map' }).click();
  await expect(page.locator('.bubble .who')).toHaveText('The Elder Guide');
  await expect(page.getByText('Sensei Kaito', { exact: true })).toHaveCount(0);
  const ghanaSaveAfterSelection = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:ghana-nacca') || '{}'));
  expect(ghanaSaveAfterSelection.grade).toBe('grade9');
  expect(ghanaSaveAfterSelection.subject).toBe('ghcoremath');

  const ghanaProfile = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-curriculum-profile-v1') || '{}'));
  expect(ghanaProfile.activeCurriculumId).toBe('ghana-nacca');
  expect(ghanaProfile.enabledCurriculumIds).toContain('italy-national');
  expect(ghanaProfile.enabledCurriculumIds).toContain('ghana-nacca');

  await page.locator('#hGrade').click();
  await page.getByRole('button', { name: /Italy/ }).click();
  await expect(page.locator('html')).toHaveAttribute('data-curriculum-theme', 'italian');
  await expect(page.getByTestId('sankofa-experience')).toHaveCount(0);
  await expect(page.getByRole('button', { name: /Italy/ })).toHaveAttribute('aria-pressed', 'true');
  const italianSave = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:italy-national') || '{}'));
  expect(italianSave.xp).toBe(135);
  expect(italianSave.name).toBe('Italian learner');
  const ghanaSave = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:ghana-nacca') || '{}'));
  expect(ghanaSave.xp).toBe(0);
});

test('legacy Italian save is migrated and remains compatible with the original save key', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: null,
      name: 'Legacy learner',
      lang: 'en',
      xp: 240,
      subject: 'math',
      unit: 5,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      grammarProgress: {},
      v: 5
    }));
  });
  await page.reload();

  await expect.poll(() => page.evaluate(() => localStorage.getItem('circuit-hunter-academy-v2:italy-national'))).not.toBeNull();
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2') || '{}').xp)).toBe(240);
  const migrated = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:italy-national') || '{}'));
  expect(migrated.name).toBe('Legacy learner');
  expect(migrated.xp).toBe(240);
});

test('Ghana SHS 2 opens its own Core Mathematics pathway and mission', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('circuit-hunter-academy-v2:ghana-nacca', JSON.stringify({
      grade: null, name: '', lang: 'en', xp: 0, subject: 'ghcoremath2', unit: 0,
      cleared: {}, seen: {}, flawless: {}, learningProgress: {}, v: 5
    }));
    localStorage.setItem('circuit-hunter-academy-curriculum-profile-v1', JSON.stringify({
      activeCurriculumId: 'ghana-nacca', enabledCurriculumIds: ['ghana-nacca']
    }));
  });
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="grade10"]').click();
  await expect(page.locator('[data-s="ghcoremath2"]')).toBeVisible();
  await page.locator('[data-s="ghcoremath2"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-curriculum-theme', 'sankofa');
  await page.locator('#nm').fill('SS2 Explorer');
  await page.getByRole('button', { name: /Begin your journey/ }).click();
  await expect(page.locator('h3').filter({ hasText: 'The Number Codebreaker' })).toBeVisible();
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:ghana-nacca') || '{}'));
  expect(saved.grade).toBe('grade10');
  expect(saved.subject).toBe('ghcoremath2');
});


test('Ghana SHS 3 opens its own Core Mathematics pathway and missions', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('circuit-hunter-academy-v2:ghana-nacca', JSON.stringify({
      grade: null, name: '', lang: 'en', xp: 0, subject: 'ghcoremath3', unit: 0,
      cleared: {}, seen: {}, flawless: {}, learningProgress: {}, v: 5
    }));
    localStorage.setItem('circuit-hunter-academy-curriculum-profile-v1', JSON.stringify({
      activeCurriculumId: 'ghana-nacca', enabledCurriculumIds: ['ghana-nacca']
    }));
  });
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="grade11"]').click();
  await expect(page.locator('[data-s="ghcoremath3"]')).toBeVisible();
  await page.locator('[data-s="ghcoremath3"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-curriculum-theme', 'sankofa');
  await page.locator('#nm').fill('SS3 Explorer');
  await page.getByRole('button', { name: /Begin your journey/ }).click();
  await expect(page.locator('h3').filter({ hasText: 'The Logic Pathfinder' })).toBeVisible();
  await expect(page.locator('h3').filter({ hasText: 'The Variation Engineer' })).toBeVisible();
  await expect(page.locator('h3').filter({ hasText: 'The Factorisation Forge' })).toBeVisible();
  await expect(page.locator('h3').filter({ hasText: 'The Parabola Cartographer' })).toBeVisible();
  await expect(page.locator('h3').filter({ hasText: 'The Symmetry Strategist' })).toBeVisible();
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:ghana-nacca') || '{}'));
  expect(saved.grade).toBe('grade11');
  expect(saved.subject).toBe('ghcoremath3');
});
