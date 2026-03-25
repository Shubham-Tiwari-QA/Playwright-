// Include playwright module
const { test, expect } = require('@playwright/test');

const url = 'https://www.google.com/search?q=playwright+by+testers+talk';

// ------------------ TEST 1 ------------------
  test('Assertions in playwright1', async ({ page }) => {

    console.log('Test 1 is running...');

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator("[aria-label='Search']").first();

    // URL check
    await expect(page).toHaveURL(/playwright/);

});