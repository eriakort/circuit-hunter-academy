import { expect, test } from '@playwright/test';

async function openPhysicsCheckpoint(page, unlocked = true) {
  await page.addInitScript(({ unlocked }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Physics Hunter',
      lang: 'en',
      xp: 0,
      subject: 'phys',
      unit: 3,
      cleared: unlocked ? { p1m1: true, p1m2: true, p1m3: true, p1m4: true, p1m5: true } : {},
      seen: {},
      flawless: {},
      learningProgress: {},
      checkpointProgress: {},
      v: 3
    }));
  }, { unlocked });
  await page.goto('/');
}

test('Physics Foundations checkpoint stays locked until all five foundation missions are cleared', async ({ page }) => {
  await openPhysicsCheckpoint(page, false);
  const button = page.getByRole('button', { name: 'Checkpoint', exact: true });
  await expect(button).toBeDisabled();
  await expect(button).toHaveAttribute('title', /Complete the five Physics Foundations missions/);
});

test('Physics Foundations checkpoint is playable, bilingual and records a successful attempt', async ({ page }) => {
  await openPhysicsCheckpoint(page, true);
  await page.getByRole('button', { name: 'Checkpoint', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Physics Foundations: The Sensei’s Trial' })).toBeVisible();

  const correctAnswers = [
    'kilogram (kg)',
    'second (s)',
    'equal-arm balance',
    '3,600 s',
    '3,628,800 s',
    '0.0032',
    '3 right, then 2 up',
    'time',
    'There is exactly one y value',
    'Mass stays the same; weight depends on gravity',
    'electric current',
    '12 m'
  ];

  for (let i = 0; i < correctAnswers.length; i += 1) {
    await page.getByRole('button', { name: correctAnswers[i], exact: true }).click();
    await expect(page.getByRole('status')).toBeVisible();
    const nextLabel = i === correctAnswers.length - 1 ? 'Finish checkpoint' : 'Continue';
    await page.getByRole('button', { name: nextLabel, exact: true }).click();
  }

  await expect(page.getByRole('heading', { name: 'Checkpoint cleared!' })).toBeVisible();
  await expect(page.getByText('12 / 12')).toBeVisible();
  await expect(page.locator('.who-hud')).toContainText('50 XP');

  await page.locator('#lIT').click();
  await page.getByRole('button', { name: 'Ripeti il checkpoint' }).click();
  await expect(page.getByRole('heading', { name: 'Fondamenti di fisica: la prova del Sensei' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'La Forgia delle Misure' })).toBeVisible();
});
