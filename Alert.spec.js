import { test, expect } from '@playwright/test';

test.describe('E2E Practice - The Internet Herokuapp', () => {

    test('Complete Flow', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/');

        // -------------------------------
        // ✅ Checkboxes
        // -------------------------------
        await page.getByRole('link', { name: 'Checkboxes' }).click();

        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);

        await checkbox1.check();
        await expect(checkbox1).toBeChecked();

        await checkbox2.uncheck();
        await expect(checkbox2).not.toBeChecked();

        // -------------------------------
        // ✅ Drag and Drop
        // -------------------------------
        await page.goto('https://the-internet.herokuapp.com/');
        await page.getByRole('link', { name: 'Drag and Drop' }).click();

        const source = page.locator('#column-a');
        const target = page.locator('#column-b');

        await source.dragTo(target);

        // -------------------------------
        // ✅ File Download

        await page.goto('https://the-internet.herokuapp.com/');
        await page.getByRole('link', { name: 'File Download', exact: true }).click();

        // download logic...

        // ✅ Go back to home
        await page.goto('https://the-internet.herokuapp.com/');

        // File Upload
        await page.getByRole('link', { name: 'File Upload', exact: true }).click();

        await page.locator('#file-upload').setInputFiles('download.jfif');
        await page.getByRole('button', { name: 'Upload' }).click();
    }

     // -------------------------------
//   ✅ Go to homepage first
    await page.goto('https://the-internet.herokuapp.com/');

    // File Upload
    // -------------------------------
    await page.getByRole('link', { name: 'File Upload', exact: true }).click();

    // ✅ Use correct file path
    await page.locator('#file-upload').setInputFiles('tests/download.jfif');
    await page.getByRole('button', { name: 'Upload' }).click();

        // ✅ Assertion
    await expect(page.locator('#uploaded-files')).toHaveText('download.jfif');

        // -------------------------------
        // ✅ Dropdown
        // -------------------------------
    await page.goto('https://the-internet.herokuapp.com/');

    await page.getByRole('link', { name: 'Dropdown', exact: true }).click();

    const dropdown = page.locator('#dropdown');

    // ✅ Wait for dropdown
    await expect(dropdown).toBeVisible();

    // Option 1
    await dropdown.selectOption({ value: '1' });
    await expect(dropdown).toHaveValue('1');

    // Option 2
    await dropdown.selectOption({ value: '2' });
    await expect(dropdown).toHaveValue('2');
});


