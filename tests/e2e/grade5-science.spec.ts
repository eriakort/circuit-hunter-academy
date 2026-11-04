import { expect, test } from '@playwright/test';

test('Grade 5 learners can enter the dedicated bilingual Science curriculum', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await expect(page.getByRole('heading', { name: 'Circuit Hunter Academy' })).toBeVisible();
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="science"]')).toContainText('Science & Technology');

  await page.locator('.subjcard[data-s="science"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Science & Technology');
  await expect(page.locator('#regf')).toBeVisible();
  await page.locator('#nm').fill('Science Hunter');
  await page.locator('#regf').getByRole('button', { name: 'Join the academy' }).click();

  await expect(page.locator('.units button')).toHaveCount(3);
  await expect(page.getByRole('heading', { name: 'Science Foundations' })).toBeVisible();
  await expect(page.locator('.mcard')).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'The Secret Life of Plants' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Animals: With or Without a Backbone?' })).toBeVisible();

  await page.locator('.mcard').first().click();
  await expect(page.getByText(/Plants are living things/)).toBeVisible();
  await expect(page.getByText(/photosynthesis/)).toBeVisible();
});

test('Grade 5 battle answers update immediately when the language changes', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await page.locator('.subjcard[data-s="science"]').click();
  await page.locator('#regf').waitFor();
  await page.locator('#nm').fill('Science Hunter');
  await page.locator('#regf').getByRole('button', { name: 'Join the academy' }).click();

  await page.locator('.mcard').first().click();
  for (let scene = 0; scene < 4; scene += 1) {
    await page.locator('#next').click();
  }

  await expect(page.locator('#arena')).toBeVisible();
  const englishOptions = await page.locator('.opts button').allTextContents();
  expect(englishOptions.length).toBeGreaterThan(1);

  await page.locator('#lIT').click();
  const italianOptions = await page.locator('.opts button').allTextContents();
  expect(italianOptions).not.toEqual(englishOptions);

  await page.locator('#lEN').click();
  await expect.poll(() => page.locator('.opts button').allTextContents()).toEqual(englishOptions);
});


test('Grade 5 Science includes the complete bilingual Universe unit', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await page.locator('.subjcard[data-s="science"]').click();
  await page.locator('#regf').waitFor();
  await page.locator('#nm').fill('Cosmos Hunter');
  await page.locator('#regf').getByRole('button', { name: 'Join the academy' }).click();

  await expect(page.locator('.units button')).toHaveCount(2);
  await page.locator('.units button').nth(1).click();

  await expect(page.getByRole('heading', { name: 'The Universe' })).toBeVisible();
  await expect(page.locator('.mcard')).toHaveCount(11);
  await expect(page.getByRole('heading', { name: 'The Sky Beyond Earth' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Our Solar System' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEM: Exploring Space' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEM: The Foucault Pendulum' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Universe Review: Mission Complete' })).toBeVisible();

  await page.locator('#lIT').click();
  await expect(page.getByRole('heading', { name: "L'Univers" })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Il cielo oltre la Terra' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEM: Il pendolo di Foucault' })).toBeVisible();
});


test('Grade 5 Science includes the complete bilingual Energy and Forces unit', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await page.locator('.subjcard[data-s="science"]').click();
  await page.locator('#regf').waitFor();
  await page.locator('#nm').fill('Energy Hunter');
  await page.locator('#regf').getByRole('button', { name: 'Join the academy' }).click();

  await expect(page.locator('.units button')).toHaveCount(3);
  await page.locator('.units button').nth(2).click();

  await expect(page.getByRole('heading', { name: 'Energy and Forces' })).toBeVisible();
  await expect(page.locator('.mcard')).toHaveCount(12);
  await expect(page.getByRole('heading', { name: 'What Is Energy?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Electricity in Everyday Life' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEM: Shadows and a Colour Wheel' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Magnetic Force' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEM: Levers Make Work Easier' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Science in Our Landscape: Review' })).toBeVisible();

  await page.locator('#lIT').click();
  await expect(page.getByRole('heading', { name: 'L’energia e le forze' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Che cos’è l’energia?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'La forza magnetica' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEM: Le leve facilitano il lavoro' })).toBeVisible();
});
