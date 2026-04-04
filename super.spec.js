import { test, expect } from '@playwright/test';

test('Superr Product Flow', async ({ page }) => {

  await page.goto('https://superr.com/');

  // ✅ Close popup (safe handling)
  const laterBtn = page.getByRole('button', { name: 'Later', exact: true });
  if (await laterBtn.isVisible()) {
    await laterBtn.click();
  }

  // ✅ Go to Products
  await page.getByRole('link', { name: 'Products', exact: true }).click();

  // ✅ Select Category (avoid duplicate text issue)
  await page.getByRole('button', { name: /Men/i }).first().click();

  // ✅ Select Brand
  await page.getByRole('button', { name: 'Bluorng' }).first().click();

  // ✅ Select Product
  await page.getByRole('img', { name: 'Shenron Red Cap', exact: true }).click();

  // ✅ Handle all thumbnails (dynamic way 🔥)
  const thumbnails = page.getByRole('button', { name: 'Thumbnail' });
  const total = await thumbnails.count();

  for (let i = 0; i < total; i++) {
    await thumbnails.nth(i).click();
  }

  // ✅ Read More / Less
  await page.getByRole('button', { name: 'Read More', exact: true }).click();
  await page.getByRole('button', { name: 'Read Less', exact: true }).click();

  // ✅ Add to cart / action button (replace with better locator if available)
  await page.locator('button[type="button"]').first().click();

  // ✅ Go to Trending section
  await page.getByRole('button', { name: 'Trending', exact: true }).click();

  // ✅ Select another product
  await page.getByText('WHITE STAR STUDDED HOODIE', { exact: true }).click();

  // ✅ Action again
  await page.locator('button[type="button"]').first().click();

});