import { expect, test } from '@playwright/test';

const requiredMissions = [
  'c6m1', 'c6m2', 'c6m3',
  'c9m1', 'c9m2', 'c9m3',
  'c11m1', 'c11m2', 'c11m3',
  'c12m1', 'c12m2', 'c12m3',
  'c13m1', 'c13m2', 'c14m1', 'c14m2',
  'c15m1', 'c15m2', 'c16m1', 'c16m2'
];

async function openAppliedCheckpoint(page, unlocked = true) {
  const cleared = unlocked
    ? Object.fromEntries(requiredMissions.map(id => [id, true]))
    : Object.fromEntries(requiredMissions.slice(0, -1).map(id => [id, true]));
  await page.addInitScript(({ cleared }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9', name: 'Applied CS Hunter', lang: 'en', xp: 0,
      subject: 'cs', unit: 0, cleared, seen: {}, flawless: {},
      learningProgress: {}, checkpointProgress: {}, v: 3
    }));
  }, { cleared });
  await page.goto('/');
}

test('Applied CS checkpoint remains locked until all advanced missions are cleared', async ({ page }) => {
  await openAppliedCheckpoint(page, false);
  const button = page.getByRole('button', { name: 'Applied CS Trial', exact: true });
  await expect(button).toBeDisabled();
  await expect(button).toHaveAttribute('title', /Complete the 20 Cybersecurity, Spreadsheet and Python missions/);
});

test('Applied CS checkpoint completes all four arenas in English and Italian', async ({ page }) => {
  await openAppliedCheckpoint(page);
  await page.getByRole('button', { name: 'Applied CS Trial', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Applied Computer Science: The Hunter’s Gauntlet' })).toBeVisible();

  const correctAnswers = [
    'A long, unique passphrase that is not reused',
    'Avoid the link and verify through the official app or website',
    'It can help restore files without paying the attacker',
    '20',
    '=$A$1+B3',
    '=IF(C2>=60,"Pass","Try again")',
    'The integer 12',
    '0, 1, 2',
    'A and B',
    'IRC',
    'Stack',
    'To send a result back to the caller'
  ];

  for (let i = 0; i < correctAnswers.length; i += 1) {
    await page.getByRole('button', { name: correctAnswers[i], exact: true }).click();
    await expect(page.getByRole('status')).toBeVisible();
    await page.getByRole('button', {
      name: i === correctAnswers.length - 1 ? 'Finish checkpoint' : 'Continue',
      exact: true
    }).click();
  }

  await expect(page.getByRole('heading', { name: 'Gauntlet cleared!' })).toBeVisible();
  await expect(page.getByText('12 / 12')).toBeVisible();
  await expect(page.locator('.who-hud')).toContainText('50 XP');

  await page.locator('#lIT').click();
  await page.getByRole('button', { name: 'Ripeti la prova' }).click();
  await expect(page.getByRole('heading', { name: 'Informatica applicata: la prova del cacciatore' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Arena dello Scudo Cyber' })).toBeVisible();
});
