import { test, expect } from '@playwright/test';

test('open google page and check title @smoke', async ({ page }) => {

  await page.goto("https://www.google.com");

  await expect(page).toHaveTitle(/Google/);

  console.log("Page Title is:", await page.title());
  console.log("Page URL is:", page.url());


});

