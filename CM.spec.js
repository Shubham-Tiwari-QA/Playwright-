import { test, expect } from '@playwright/test';

test.use({
    headless: false,          // open browser
    launchOptions: {
        slowMo:1000,           // 2 second delay
    },
});

test('open products page', async ({ page }) => {

    await page.goto('https://classmonitor.com/');

    await page.getByRole('link', { name: 'Products' }).click();

    await expect(page).toHaveURL(/products/);

    await page.getByText('Phonics Kit').first().click();

    await page.locator('.buykit-btn').first().scrollIntoViewIfNeeded();

    await page.locator('.buykit-btn').first().click();
});