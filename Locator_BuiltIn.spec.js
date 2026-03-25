// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('saucedemo', async () => {

  // ✅ Launch browser with slowMo
  const browser = await chromium.launch({
    headless: false,
    slowMo: 2000   // 2 seconds delay between each action
  });

  const page = await browser.newPage();

  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Assertion
  await expect(page).toHaveURL(/inventory/);

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('img', { name: 'Sauce Labs Backpack' }).click();

  await browser.close();

});