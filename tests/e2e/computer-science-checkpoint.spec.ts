import { expect, test } from '@playwright/test';

const requiredMissions = [
  'a1m1', 'a1m2', 'a1m3',
  'a2m1', 'a2m2', 'a2m3', 'a2m4',
  'a3m1', 'a3m2', 'a3m3', 'a3m4',
  'a5m1', 'a5m2', 'a5m3', 'a5m4'
];

async function openComputerScienceCheckpoint(page, unlocked = true) {
  const cleared = unlocked
    ? Object.fromEntries(requiredMissions.map(id => [id, true]))
    : Object.fromEntries(requiredMissions.slice(0, -1).map(id => [id, true]));
  await page.addInitScript(({ cleared }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Computer Science Hunter',
      lang: 'en',
      xp: 0,
      subject: 'cs',
      unit: 0,
      cleared,
      seen: {},
      flawless: {},
      learningProgress: {},
      checkpointProgress: {},
      v: 3
    }));
  }, { cleared });
  await page.goto('/');
}

test('Computer Science checkpoint stays locked until all foundation missions are cleared', async ({ page }) => {
  await openComputerScienceCheckpoint(page, false);
  const button = page.getByRole('button', { name: 'CS Checkpoint', exact: true });
  await expect(button).toBeDisabled();
  await expect(button).toHaveAttribute('title', /Complete the 15 Algorithm, Data, Hardware and Network foundation missions/);
});

test('Computer Science checkpoint is playable, bilingual and awards XP only once', async ({ page }) => {
  await openComputerScienceCheckpoint(page, true);
  await page.getByRole('button', { name: 'CS Checkpoint', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Computer Science Foundations: The Circuit Trial' })).toBeVisible();

  const correctAnswers = [
    'A sequence of clear steps to solve a problem',
    'Its length and width',
    'Diamond',
    '8',
    '13',
    'RGB',
    'CPU',
    'They are lost',
    'Keyboard and mouse',
    'Local Area Network',
    'To send manageable pieces that can be routed and reassembled',
    'The Web is a service that uses the Internet'
  ];

  for (let i = 0; i < correctAnswers.length; i += 1) {
    await page.getByRole('button', { name: correctAnswers[i], exact: true }).click();
    await expect(page.getByRole('status')).toBeVisible();
    await page.getByRole('button', {
      name: i === correctAnswers.length - 1 ? 'Finish checkpoint' : 'Continue',
      exact: true
    }).click();
  }

  await expect(page.getByRole('heading', { name: 'Checkpoint cleared!' })).toBeVisible();
  await expect(page.getByText('12 / 12')).toBeVisible();
  await expect(page.locator('.who-hud')).toContainText('50 XP');

  await page.locator('#lIT').click();
  await page.getByRole('button', { name: 'Ripeti il checkpoint' }).click();
  await expect(page.getByRole('heading', { name: 'Fondamenti di informatica: la prova del circuito' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dojo degli algoritmi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Che cos’è un algoritmo?' })).toBeVisible();
});
