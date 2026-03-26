import { test, expect } from '@playwright/test';


test.use({
    headless: false,          // open browser
    launchOptions: {
        slowMo:1000,           // 2 second delay
    },
});

test('test', async ({ page }) => {
  await page.goto('https://stagelearn.classmonitor.com/demo');
  await page.getByRole('button', { name: 'Thu 26 Mar' }).click();
  await page.getByRole('textbox', { name: 'Parent\'s Phone Number *' }).click();
  await page.getByRole('textbox', { name: 'Parent\'s Phone Number *' }).fill('8523366552');
  await page.getByRole('textbox', { name: 'Parent\'s Name * Parent\'s Email' }).click();
  await page.getByRole('textbox', { name: 'Parent\'s Name * Parent\'s Email' }).fill('test');
  await page.getByRole('textbox', { name: 'Select Your Child Age' }).click();
  await page.getByRole('textbox', { name: 'Select Your Child Age' }).fill('testyopmaicom');
  await page.getByLabel('Child Age *').selectOption('5');
  await page.getByRole('combobox', { name: 'Select Package' }).click();
  await page.getByRole('treeitem', { name: 'Mom Toddler' }).click();
  await page.getByText('Subject / Package *').click();
  await page.getByText('Subject / Package * Phonics').click();
  await page.getByRole('treeitem', { name: 'Phonics Basic' }).click();
  await page.getByRole('radio', { name: 'Request 1-1 Demo' }).check();
  await page.getByRole('textbox', { name: 'Preferred Date*' }).click();
  await page.getByRole('table').getByText('26', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Preferred Time *' }).click();
  await page.getByText('05:00 PM').click();
  await page.getByRole('combobox', { name: 'Select Executive' }).click();
  await page.getByRole('treeitem', { name: 'Abhishek Kumar', exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});