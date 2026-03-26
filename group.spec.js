const { test, expect } = require('@playwright/test');

const url = 'https://www.google.com/search?q=playwright+by+testers+talk';

// ------------------ SMOKE TESTS ------------------
test.describe('Smoke Testing', () => {

    test('Test1', async ({ page }) => {

        console.log('Test 1 running');

        await page.goto(url);

        const searchBox = page.locator("[name='q']:visible");

        await expect(searchBox).toBeVisible();
        await expect(page).toHaveURL(/playwright/);
        await expect(searchBox).toHaveValue(/playwright/);

    });

    test('Test2', async ({ page }) => {

        console.log('Test 2 running');

        await page.goto(url);

        const searchBox = page.locator("[name='q']:visible");

        await expect(searchBox).toBeVisible();
        await expect(page).toHaveURL(/playwright/);
        await expect(searchBox).toHaveValue(/playwright/);

    });

});


// ------------------ SANITY TESTS ------------------
test.describe('Sanity Testing', () => {

    test('Test3', async ({ page }) => {

        console.log('Test 3 running');

        await page.goto(url);

        const searchBox = page.locator("[name='q']:visible");

        await expect(searchBox).toBeVisible();
        await expect(page).toHaveURL(/playwright/);
        await expect(searchBox).toHaveValue(/playwright/);

    });

});


    test('Test4', async ({ page }) => {

        console.log('Test 3 running');

        await page.goto(url);

        const searchBox = page.locator("[name='q']:visible");

        await expect(searchBox).toBeVisible();
        await expect(page).toHaveURL(/playwright/);
        await expect(searchBox).toHaveValue(/playwright/);

    });



 
