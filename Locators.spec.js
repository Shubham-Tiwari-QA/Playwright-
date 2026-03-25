import { test, expect } from '@playwright/test';

test('Login in SauceDemo', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  // Better validation
  await expect(page).toHaveURL(/inventory/);

  await expect(page.locator('.title')).toHaveText('Products');

  const productElement = page.locator('.title');
  await expect(productElement).toBeVisible();
});