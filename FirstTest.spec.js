// @ts-check
import { test, expect } from '@playwright/test';

test('open google page and check title', async ({ page }) => {

  // Open website
  await page.goto("https://www.google.com");

  // Get Page Title
  const pageTitle = await page.title();
  console.log("Page Title is:", pageTitle);

  // Get Page URL
  const pageUrl = page.url();
  console.log("Page URL is:", pageUrl);

  // Assertion
  await expect(page).toHaveTitle(/Google/);
});