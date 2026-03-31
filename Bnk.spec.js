import { test, expect } from '@playwright/test';

test.use({
  headless: false,
  launchOptions: {
    slowMo: 500,
  },
});

test('Banking Flow Test', async ({ page }) => {

  // ✅ Start from main login page
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  // ---------- MANAGER LOGIN ----------
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();

  // ---------- ADD CUSTOMER ----------
  await page.locator('button:has-text("Add Customer")').click();

  await page.getByPlaceholder('First Name').fill('Shubham');
  await page.getByPlaceholder('Last Name').fill('Tiwari');
  await page.getByPlaceholder('Post Code').fill('482002');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Add Customer' }).nth(1).click();

  // ---------- OPEN ACCOUNT ----------
  await page.locator('button:has-text("Open Account")').click();

  await page.locator('#userSelect').selectOption({ index: 1 });
  await page.locator('#currency').selectOption('Dollar');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Process' }).click();

  // ---------- GO HOME ----------
  await page.locator('button:has-text("Home")').click();

  // ---------- CUSTOMER LOGIN ----------
  await page.getByRole('button', { name: 'Customer Login' }).click();

  await page.locator('#userSelect').selectOption({ index: 1 });
  await page.getByRole('button', { name: 'Login' }).click();

  // ---------- DEPOSIT ----------
  const depositBtn = page.locator('button:has-text("Deposit")');
  await expect(depositBtn).toBeVisible();
  await depositBtn.click();

  await page.getByPlaceholder('amount').fill('20000');

  // ✅ Click Deposit submit
  await page.getByRole('button', { name: 'Deposit' }).nth(1).click();

  // Click Withdraw tab
  const withdrawTab = page.locator('button:has-text("Withdrawl")');
  await expect(withdrawTab).toBeVisible();
  await withdrawTab.click();

  // Fill amount
  await page.getByPlaceholder('amount').fill('5000');

  // Click Withdraw submit button
  const withdrawBtn = page.locator('button:has-text("Withdraw")').nth(1);
  await expect(withdrawBtn).toBeVisible();
  await withdrawBtn.click();

  // ---------- TRANSACTIONS ----------
  await page.getByRole('button', { name: 'Transactions' }).click();

});
