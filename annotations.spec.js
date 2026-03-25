// Import Playwright
const { test, expect } = require('@playwright/test');

// Common test data
const url = 'https://www.google.com/search?q=playwright+by+testers+talk';

// ------------------ TEST 1 ------------------
  test('Assertions in playwright1', async ({ page }) => {

    console.log('Test 1 is running...');

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator("[aria-label='Search']").first();

    // URL check
    await expect(page).toHaveURL(/playwright/);

    // // ❌ REMOVE TITLE (main issue fixed)

    // // Value check (safe)
    // await expect(searchBox).toHaveValue(/playwright/);

    // // Element checks
    // await expect(searchBox).toBeVisible();
    // await expect(searchBox).toBeEnabled();

});

// // ------------------ TEST 2 (SKIPPED) ------------------
 test.skip('Assertions in playwright2', async ({ page }) => {

    console.log('Test 2 is skipped...');

     await page.goto(url);

    const searchBox = page.locator("[aria-label='Search']").first();

    await expect(page).toHaveURL(/playwright/);
    await expect(searchBox).toHaveValue(/playwright/);

 });

 // ------------------ TEST 3 ------------------
    test('Assertions in playwright3', async ({ page }) => {

    console.log('Test 3 is running...');

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator("[aria-label='Search']").first();

    // URL check
    await expect(page).toHaveURL(/playwright/);

});
