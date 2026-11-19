import { expect, test } from '@playwright/test';

test('the app declares its icons and every icon file is served', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]').evaluateAll(links =>
    links.map(link => (link as HTMLLinkElement).href)
  );
  expect(hrefs).toHaveLength(4);
  for (const href of hrefs) expect((await request.get(href)).status(), href).toBe(200);

  const manifestHref = await page.locator('link[rel="manifest"]').evaluate(link => (link as HTMLLinkElement).href);
  const manifest = await (await request.get(manifestHref)).json();
  expect(manifest.icons.map((icon: { sizes: string }) => icon.sizes)).toEqual(expect.arrayContaining(['192x192', '512x512']));
  for (const icon of manifest.icons) {
    const response = await request.get(new URL(icon.src, manifestHref).href);
    expect(response.status(), icon.src).toBe(200);
  }
});
