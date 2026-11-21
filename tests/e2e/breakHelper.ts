import type { Page } from '@playwright/test';

/** Press Continue; if a study break opens instead of the next scene, skip it. */
export async function advanceScene(page: Page) {
  await page.locator('#next').click();
  const skip = page.locator('#break-skip');
  try {
    await skip.waitFor({ state: 'visible', timeout: 400 });
    await skip.click();
  } catch {
    /* no break on this scene */
  }
}
