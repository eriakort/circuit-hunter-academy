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
  await expect(page.locator('.ghmath-visual')).toContainText('Real Number System Hierarchy');
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
  await expect(page.locator('.grade-card[data-grade="ghjhs1"]')).toContainText('Mathematics · 4 strands + Science · 5 strands · JHS 1');
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

test('Ghana JHS 1 Science mission list opens its lessons', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await expect(page.locator('.mcard')).toHaveCount(4);
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

test('Ghana JHS 3 Science Diversity of Matter strand is selectable and opens its missions', async ({ page }) => {
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


test('Ghana JHS 3 Science Systems strand opens all five curriculum missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3science');
  await page.locator('.units button').filter({ hasText: 'Systems' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Circulation and Respiration Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Composting Field Engineer');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('The circulatory system');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 3 Science Forces and Energy strand opens all five curriculum missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3science');
  await page.locator('.units button').filter({ hasText: 'Forces and Energy' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Energy Conservation Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Agricultural Tool Designer');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Energy is the ability');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


test('Ghana JHS 3 Science Humans and the Environment strand opens all five curriculum missions', async ({ page }) => {
  await enterGhana(page, 'ghjhs3', 'ghjhs3science');
  await page.locator('.units button').filter({ hasText: 'Humans and the Environment' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Waste-Wise Community Guardian');
  await expect(page.locator('.mcard').last()).toContainText('The Plant Resources Ranger');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Waste is material that people discard');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


const openBasic7ScienceVisual = async (
  page: Page,
  missionTitle: string,
  completedPrerequisites: string[] = []
) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');

  // Keep the real mission gates intact while seeding the prerequisite state
  // needed to exercise later lessons independently.
  if (completedPrerequisites.length > 0) {
    await page.evaluate((missionIds) => {
      const saveKey = 'circuit-hunter-academy-v2:ghana-nacca';
      const rawSave = localStorage.getItem(saveKey);
      if (!rawSave) throw new Error('Ghana curriculum save was not created');
      const save = JSON.parse(rawSave);
      save.cleared = {
        ...(save.cleared || {}),
        ...Object.fromEntries(missionIds.map((id) => [id, true]))
      };
      localStorage.setItem(saveKey, JSON.stringify(save));
    }, completedPrerequisites);
    await page.reload();
  }

  await page.locator('.mcard').filter({ hasText: missionTitle }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByTestId('ghana-science-visual')).toBeVisible();
};

test('Basic 7 states of matter visual responds to temperature and phase controls', async ({ page }) => {
  await openBasic7ScienceVisual(page, 'The Materials Explorer');
  const slider = page.getByLabel('Temperature model');
  await slider.fill('110');
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('Gas');
  await page.getByRole('button', { name: 'Solid', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('Solid');
  await expect(page.locator('.ghana-science-visual__art svg')).toHaveAttribute('aria-label', /Particle model/);
});

test('Basic 7 important liquids visual changes explanation for each liquid', async ({ page }) => {
  await openBasic7ScienceVisual(page, 'The Life-Giving Liquids Guardian', ['gh-jhs1-science-materials-states']);
  await page.getByRole('button', { name: 'Blood', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('oxygen and nutrients');
  await page.getByRole('button', { name: 'Plant sap', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('roots');
  await page.getByRole('button', { name: 'Household liquids', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('Never taste an unknown liquid');
});

test('Basic 7 everyday materials visual compares properties and local uses', async ({ page }) => {
  await openBasic7ScienceVisual(page, 'The Everyday Materials Engineer', ['gh-jhs1-science-materials-states', 'gh-jhs1-science-importance-liquids']);
  await page.getByRole('button', { name: 'Wood', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('desks, stools and furniture');
  await page.getByRole('button', { name: 'Glass', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('lets light pass through');
});

test('Basic 7 living cell visual explores plant and animal cell structures', async ({ page }) => {
  await openBasic7ScienceVisual(page, 'The Living Cell Investigator');
  await page.getByRole('button', { name: 'Chloroplast', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('photosynthesis');
  await page.getByRole('button', { name: 'Animal cell', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Cell wall', exact: true })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Cell membrane', exact: true })).toBeVisible();
});


const openBasic7CyclesVisual = async (page: Page, missionTitle: string, completedPrerequisites: string[] = []) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Cycles' }).click();
  if (completedPrerequisites.length > 0) {
    await page.evaluate((missionIds) => {
      const saveKey = 'circuit-hunter-academy-v2:ghana-nacca';
      const rawSave = localStorage.getItem(saveKey);
      if (!rawSave) throw new Error('Ghana curriculum save was not created');
      const save = JSON.parse(rawSave);
      save.cleared = { ...(save.cleared || {}), ...Object.fromEntries(missionIds.map((id) => [id, true])) };
      localStorage.setItem(saveKey, JSON.stringify(save));
    }, completedPrerequisites);
    await page.reload();
  }
  await page.locator('.mcard').filter({ hasText: missionTitle }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByTestId('ghana-science-visual')).toBeVisible();
};

test('Basic 7 Earth systems visual explores water cycle and land processes', async ({ page }) => {
  await openBasic7CyclesVisual(page, 'The Earth Systems Explorer');
  await page.getByRole('button', { name: 'Condensation', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout').first()).toContainText('clouds');
  await page.getByRole('button', { name: 'Erosion', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout').last()).toContainText('movement of soil');
});

test('Basic 7 life cycles visual compares housefly and maize development', async ({ page }) => {
  await openBasic7CyclesVisual(page, 'The Life Cycle Guardian', ['gh-jhs1-science-earth-cycles']);
  await page.getByRole('button', { name: 'Housefly', exact: true }).click();
  await page.getByRole('button', { name: /Larva/ }).click();
  await expect(page.locator('.gh-jhs1-science-readout').first()).toContainText('maggot');
  await page.getByRole('button', { name: 'Maize plant', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout').first()).toContainText('seed');
});

test('Basic 7 crop production visual explores Ghanaian crops and farming stages', async ({ page }) => {
  await openBasic7CyclesVisual(page, 'The Crop Care Strategist', ['gh-jhs1-science-earth-cycles', 'gh-jhs1-science-life-cycles']);
  await page.getByRole('button', { name: 'Cassava', exact: true }).click();
  await page.getByRole('button', { name: 'Harvest and store', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('Cassava');
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('clean, dry');
});

test('Basic 7 animal production visual compares animal groups and welfare needs', async ({ page }) => {
  await openBasic7CyclesVisual(page, 'The Animal Welfare Keeper', ['gh-jhs1-science-earth-cycles', 'gh-jhs1-science-life-cycles', 'gh-jhs1-science-crop-production']);
  await page.getByRole('button', { name: 'Goat', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout').first()).toContainText('Ruminant');
  await page.getByRole('button', { name: 'Welfare', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout').last()).toContainText('clean water');
});


test('Ghana JHS 1 Science Systems strand opens its dedicated interactive teaching visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Systems' }).click();
  await expect(page.locator('.mcard')).toHaveCount(4);
  await expect(page.locator('.mcard').first()).toContainText('The Digestion Defender');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Food supplies energy and materials');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByTestId('ghana-science-visual')).toContainText('The Digestion Defender');
  await expect(page.getByTestId('ghana-science-visual')).toContainText('Mouth');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Ghana JHS 1 Science Forces and Energy strand opens its dedicated interactive teaching visual', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Forces and Energy' }).click();
  await expect(page.locator('.mcard')).toHaveCount(5);
  await expect(page.locator('.mcard').first()).toContainText('The Energy Form Explorer');
  await page.locator('.mcard').first().click();
  await expect(page.locator('main')).toContainText('Energy is the ability');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByTestId('ghana-science-visual')).toContainText('The Energy Form Explorer');
  await expect(page.getByTestId('ghana-science-visual')).toContainText('Kinetic');
  await page.getByRole('button', { name: 'Gravitational potential', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout')).toContainText('Akosombo Dam');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});

test('Basic 7 Agricultural Tools visual matches tools to farm tasks and checks safe handling', async ({ page }) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Forces and Energy' }).click();
  await page.evaluate(() => {
    const saveKey = 'circuit-hunter-academy-v2:ghana-nacca';
    const rawSave = localStorage.getItem(saveKey);
    if (!rawSave) throw new Error('Ghana curriculum save was not created');
    const save = JSON.parse(rawSave);
    save.cleared = {
      ...(save.cleared || {}),
      ...Object.fromEntries([
        'gh-jhs1-science-energy-forms',
        'gh-jhs1-science-electricity-generation',
        'gh-jhs1-science-energy-conversion',
        'gh-jhs1-science-force-motion'
      ].map((id) => [id, true]))
    };
    localStorage.setItem(saveKey, JSON.stringify(save));
  });
  await page.reload();
  await page.locator('.units button').filter({ hasText: 'Forces and Energy' }).click();
  await page.locator('.mcard').filter({ hasText: 'The Farm Tool Engineer' }).click();
  await expect(page.locator('main')).toContainText('Agricultural tools help farmers prepare land');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByTestId('ghana-science-visual')).toContainText('The Farm Tool Engineer');
  await page.getByRole('button', { name: 'Move a harvest load', exact: true }).click();
  await expect(page.locator('.gh-jhs1-science-readout').first()).toContainText('Wheelbarrow');
  await expect(page.locator('.gh-jhs1-science-readout').first()).toContainText('second-class lever');
  await page.getByRole('checkbox', { name: /Check tools and handles/ }).check();
  await expect(page.locator('.gh-jhs1-science-readout').last()).toContainText('1/4');
  await expect(page.locator('main')).not.toContainText(/Italian Studies|Informatica/i);
});


const openBasic7HumansEnvironmentVisual = async (page: Page, missionTitle: string, completedPrerequisites: string[] = []) => {
  await enterGhana(page, 'ghjhs1', 'ghjhs1science');
  await page.locator('.units button').filter({ hasText: 'Humans and the Environment' }).click();
  if (completedPrerequisites.length > 0) {
    await page.evaluate((missionIds) => {
      const saveKey = 'circuit-hunter-academy-v2:ghana-nacca';
      const rawSave = localStorage.getItem(saveKey);
      if (!rawSave) throw new Error('Ghana curriculum save was not created');
      const save = JSON.parse(rawSave);
      save.cleared = { ...(save.cleared || {}), ...Object.fromEntries(missionIds.map((id) => [id, true])) };
      localStorage.setItem(saveKey, JSON.stringify(save));
    }, completedPrerequisites);
    await page.reload();
    await page.locator('.units button').filter({ hasText: 'Humans and the Environment' }).click();
  }
  await page.locator('.mcard').filter({ hasText: missionTitle }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByTestId('ghana-science-visual')).toBeVisible();
};

test('Basic 7 waste management visual sorts waste and teaches the 3Rs', async ({ page }) => {
  await openBasic7HumansEnvironmentVisual(page, 'The Waste-Wise Community Guardian');
  await page.getByRole('button', { name: 'Used battery', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('hazardous-waste collection');
  await page.getByRole('button', { name: 'Recycle', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('new products');
});

test('Basic 7 human health visual links nutrients and disease-specific prevention', async ({ page }) => {
  await openBasic7HumansEnvironmentVisual(page, 'The Healthy Body Protector', ['gh-jhs1-science-waste-management']);
  await page.getByRole('button', { name: 'Vitamin C', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('Scurvy');
  await page.getByRole('button', { name: 'Infected body fluids', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('Ebola');
});

test('Basic 7 science careers visual connects evidence-based work to community impact', async ({ page }) => {
  await openBasic7HumansEnvironmentVisual(page, 'The Science Career Pathfinder', ['gh-jhs1-science-waste-management', 'gh-jhs1-science-human-health']);
  await page.getByRole('button', { name: 'Environmental scientist', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('pollution, habitats and natural resources');
});

test('Basic 7 climate visual distinguishes natural and enhanced greenhouse effects', async ({ page }) => {
  await openBasic7HumansEnvironmentVisual(page, 'The Green Future Strategist', ['gh-jhs1-science-waste-management', 'gh-jhs1-science-human-health', 'gh-jhs1-science-science-industry']);
  await page.getByRole('button', { name: 'Enhanced greenhouse effect', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('climate change');
  await page.getByRole('button', { name: 'Hydropower', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('river habitats');
});


test('Basic 7 habitat visual explores adaptations and organism relationships', async ({ page }) => {
  await openBasic7HumansEnvironmentVisual(page, 'The Habitat and Adaptation Ranger', [
    'gh-jhs1-science-waste-management',
    'gh-jhs1-science-human-health',
    'gh-jhs1-science-science-industry',
    'gh-jhs1-science-climate-green-economy'
  ]);
  await page.getByRole('button', { name: 'Guinea savanna', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('deep roots');
  await page.getByRole('button', { name: 'Mutualism', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('Both organisms benefit.');
  await page.getByRole('button', { name: 'Parasitism', exact: true }).click();
  await expect(page.locator('.motion-scene__caption')).toContainText('host is harmed');
});
