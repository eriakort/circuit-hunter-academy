import { expect, test, type Page } from '@playwright/test';

const enterGhana = async (page: Page, grade: 'ghjhs1' | 'ghjhs2' | 'ghjhs3' | 'ghshs1' | 'ghshs2' | 'ghshs3', subject: string) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator(`.grade-card[data-grade="${grade}"]`).click();
  await page.locator(`.subjcard[data-s="${subject}"]`).click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Kofi');
    await page.locator('#regf button').first().click();
  }
};

test('Ghana maths lessons show maths visuals, not computer science, and offer English only', async ({ page }) => {
  await enterGhana(page, 'ghshs1', 'ghcoremath');
  await expect(page.locator('#lIT')).toHaveCount(0);
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toContainText('Numbers for Everyday Life');
  await expect(page.locator('main')).not.toContainText(/INFORMATIC/i);
  await expect(page.locator('.eyebrow').first()).toContainText('Topic 1');
});

test('Ghana SHS 2 lessons use the strand visual too', async ({ page }) => {
  await enterGhana(page, 'ghshs2', 'ghcoremath2');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toBeVisible();
  await expect(page.locator('main')).not.toContainText(/INFORMATIC/i);
});

test('Ghana Formula Book, Codex and Test only show English maths content', async ({ page }) => {
  await enterGhana(page, 'ghshs1', 'ghcoremath');

  await page.locator('#hFormula').click();
  const main = page.locator('main');
  await expect(main).toContainText('Number, Algebra & Sets');
  for (const banned of ['Computer Science', 'Physics', 'Italian Studies', 'Chemistry', 'Grade 5', 'Vera solo']) {
    await expect(main).not.toContainText(banned);
  }
  await page.getByRole('button', { name: /Interactive Maths Lab/ }).click();
  await expect(main).not.toContainText('0101₂');
  await expect(main).not.toContainText('Essere vs Avere');

  await page.locator('#hCodex').click();
  await expect(main).not.toContainText(/Italian|Italiano/);
  await expect(page.getByTestId('codex-empty')).toBeVisible();

  await page.locator('#hTest').click();
  await expect(main).toContainText('All Core Mathematics Topics');
});


test('Ghana JHS 1 Mathematics pathways are selectable and open Number, Algebra and Geometry missions', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await expect(page.locator('.grade-card[data-grade="ghjhs1"]')).toContainText('Mathematics · all four strands + Science pilot · JHS 1');
  await page.locator('.grade-card[data-grade="ghjhs1"]').click();
  await page.locator('.subjcard[data-s="ghjhs1math"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Market Number Mission');
  await page.locator('.units button').filter({ hasText: 'Algebraic Thinking and Relationships' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Pattern Hunter’s Trial');
  await expect(page.locator('.mcard').last()).toContainText('The Balance Gate');
  await page.locator('.units button').filter({ hasText: 'Geometry, Shape and Measurement' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Lines and Angles Expedition');
  await expect(page.locator('.mcard').last()).toContainText('The Everyday Measurement Quest');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'geometry');
  await expect(page.locator('main')).toContainText('The Lines and Angles Expedition');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 1 Handling Data missions are available and show the data visual', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghjhs1"]').click();
  await page.locator('.subjcard[data-s="ghjhs1math"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
  await page.locator('.units button').filter({ hasText: 'Collecting and Making Sense of Data' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Community Survey Quest');
  await expect(page.locator('.mcard').last()).toContainText('The Data Detective’s Challenge');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'data');
  await expect(page.locator('main')).toContainText('The Community Survey Quest');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 2 Mathematics Number pathway is selectable and opens its missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2math');
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Integer Expedition');
  await expect(page.locator('.mcard').last()).toContainText('The Ratio and Recipe Challenge');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'number');
  await expect(page.locator('main')).toContainText('The Integer Expedition');
});


test('Ghana JHS 2 Mathematics Algebra strand opens its missions and algebra visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2math');
  await page.locator('.units button').filter({ hasText: 'Algebraic Patterns and Equations' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Sequence Pathfinder');
  await expect(page.locator('.mcard').last()).toContainText('The Balance and Boundary Trial');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'algebra');
  await expect(page.locator('main')).toContainText('The Sequence Pathfinder');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 2 Mathematics Geometry and Measurement strand opens its missions and geometry visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2math');
  await page.locator('.units button').filter({ hasText: 'Geometry, Shape and Measurement' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Parallel Lines Pathfinder');
  await expect(page.locator('.mcard').last()).toContainText('The Solid-Shape Builder');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'geometry');
  await expect(page.locator('main')).toContainText('The Parallel Lines Pathfinder');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 2 Mathematics Handling Data strand opens its missions and data visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2math');
  await page.locator('.units button').filter({ hasText: 'Data, Statistics and Chance' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Fair Survey Strategist');
  await expect(page.locator('.mcard').last()).toContainText('The Evidence and Chance Detective');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'data');
  await expect(page.locator('main')).toContainText('The Fair Survey Strategist');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 3 Mathematics Number strand opens its missions and number visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3math');
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Power of Indices Trial');
  await expect(page.locator('.mcard').last()).toContainText('The Proportion and Money Quest');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'number');
  await expect(page.locator('main')).toContainText('The Power of Indices Trial');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 3 Mathematics Algebra strand opens its missions and algebra visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3math');
  await page.locator('.units button').filter({ hasText: 'Algebraic Reasoning and Relationships' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Expression Forge');
  await expect(page.locator('.mcard').last()).toContainText('The Linear Systems Arena');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'algebra');
  await expect(page.locator('main')).toContainText('The Expression Forge');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 3 Mathematics Geometry and Measurement opens its missions and geometry visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3math');
  await page.locator('.units button').filter({ hasText: 'Geometry, Construction and Measurement' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Navigator’s Construction Quest');
  await expect(page.locator('.mcard').last()).toContainText('The Mensuration Master Builder');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'geometry');
  await expect(page.locator('main')).toContainText('The Navigator’s Construction Quest');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 3 Mathematics Handling Data strand opens its missions and data visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3math');
  await page.locator('.units button').filter({ hasText: 'Data, Statistics and Chance' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Data Collection Strategist');
  await expect(page.locator('.mcard').last()).toContainText('The Chance and Evidence Detective');
  await page.locator('.mcard').first().click();
  await expect(page.locator('.ghmath-visual')).toHaveAttribute('data-strand', 'data');
  await expect(page.locator('main')).toContainText('The Data Collection Strategist');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 1 Science Diversity of Matter pilot opens its missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Materials Explorer');
  await expect(page.locator('.mcard').last()).toContainText('The Living Cell Investigator');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Everything around us is made of matter');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('main')).toContainText('solid, liquid and gas');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 1 Science Cycles strand opens all four sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Cycles' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Earth Systems Explorer');
  await expect(page.locator('.mcard').last()).toContainText('The Animal Welfare Keeper');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('The Sun heats water');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 1 Science Systems strand opens all four sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Systems' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Digestion Defender');
  await expect(page.locator('.mcard').last()).toContainText('The Farming Systems Strategist');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Food supplies energy and materials');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 1 Science Forces and Energy strand opens all five sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Forces and Energy' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Energy Form Explorer');
  await expect(page.locator('.mcard').last()).toContainText('The Farm Tool Engineer');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Energy is the ability to cause change');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 1 Science Humans and the Environment strand opens all five sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Humans and the Environment' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Waste-Wise Community Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Habitat and Adaptation Ranger');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Waste is material that people no longer need or want');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 2 Science Diversity of Matter strand opens all three missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2science');
  await page.locator('.units button').filter({ hasText: 'Diversity of Matter' }).click();
  await expect(page.locator('.mcard')).toHaveCount(3);
  await expect(page.locator('.mcard').first()).toContainText('The Mixture Separation Engineer');
  await expect(page.locator('.mcard').last()).toContainText('The Cell Type Investigator');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('A mixture forms when two or more substances are combined');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 2 Science Cycles strand opens all four sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2science');
  await page.locator('.units button').filter({ hasText: 'Cycles' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Carbon Cycle Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Animal Feed and Water Keeper');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('The carbon cycle describes how carbon moves repeatedly');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

 
test('Ghana JHS 2 Science Systems strand opens all four sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2science');
  await page.locator('.units button').filter({ hasText: 'Systems' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Dental Health Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Sustainable Farming Systems Planner');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('A human tooth has three main visible regions');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 2 Science Forces and Energy strand opens all five sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2science');
  await page.locator('.units button').filter({ hasText: 'Forces and Energy' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Energy Conversion Pathfinder');
  await expect(page.locator('.mcard').last()).toContainText('The Farm Tool Engineer');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Energy conversion happens when energy changes from one form to another');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 2 Science Humans and the Environment strand opens all six sub-strand missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs2', 'ghjhs2science');
  await page.locator('.units button').filter({ hasText: 'Humans and the Environment' }).click();
  await expect(page.locator('.mcard')).toHaveCount(6);
  await expect(page.locator('.mcard').first()).toContainText('The Waste-Wise Community Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Rock and Soil Origins Explorer');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Waste is material that people no longer need or want');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 3 Science Diversity of Matter pilot is selectable and opens its missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3science');
  await page.locator('.units button').filter({ hasText: 'Diversity of Matter' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Binary Compound Chemist');
  await expect(page.locator('.mcard').last()).toContainText('The Human Cell Function Ranger');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('A binary compound');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 3 Science Cycles strand opens all five curriculum missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3science');
  await page.locator('.units button').filter({ hasText: 'Cycles' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Nitrogen Cycle Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Livestock Nutrition Strategist');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('The Nitrogen Cycle Guardian');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('main')).toContainText('Nitrogen fixation');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});
