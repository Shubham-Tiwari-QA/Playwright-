import { test, expect } from '@playwright/test';

test.use({
  headless: false,
  launchOptions: {
    slowMo: 1000, // 3000 bahut slow hai, 1000 better
  },
});

test('E2E Automation Exercise Flow', async ({ page }) => {

  test.setTimeout(120000); // ✅ timeout increase

  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForLoadState('networkidle');


  // 🔹 Signup/Login
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await expect(page.getByText('New User Signup!')).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).fill('Shubham');
  const email = `shubham${Date.now()}@yopmail.com`;

  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill(email);

  await page.getByRole('button', { name: 'Signup' }).click();

  // 🔹 Account Info
  await expect(page.getByText('Enter Account Information')).toBeVisible();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByLabel('Password *').fill('Shubham123');
  await page.locator('#days').selectOption('2');
  await page.locator('#months').selectOption('1');
  await page.locator('#years').selectOption('1995');
  await page.getByRole('checkbox', { name: /newsletter/i }).check();

  // 🔹 Address Info
// 🔹 Address Section
await expect(page.getByText('Address Information')).toBeVisible();

// First & Last Name
await page.getByLabel('First name *').fill('Shubham');
await page.getByLabel('Last name *').fill('Tiwari');
// Scroll to form (important)
const address1 = page.locator('#address1');
await address1.scrollIntoViewIfNeeded();
// Fill address fields
await expect(address1).toBeVisible();
await address1.fill('Indore');
// Extra safe waits for each field
const state = page.locator('#state');
await expect(state).toBeVisible();
await state.fill('MP');
const city = page.locator('#city');
await expect(city).toBeVisible();
await city.fill('Indore');
const zipcode = page.locator('#zipcode');
await expect(zipcode).toBeVisible();
await zipcode.fill('485002');
// Mobile
await page.getByLabel('Mobile Number *').fill('8319779125');
// 🔹 Create Account
const createBtn = page.getByRole('button', { name: 'Create Account' });
await expect(createBtn).toBeVisible();
await expect(createBtn).toBeEnabled();
await createBtn.click();
// Success validation
await expect(page.getByText('Account Created!')).toBeVisible();
//Continue
await page.getByRole('link', { name: 'Continue' }).click();


  // 🔹 Add Product to Cart (stable)
const product = page.locator('.product-image-wrapper').first();
// Ensure product visible
await expect(product).toBeVisible();
// Scroll + hover (important)
await product.scrollIntoViewIfNeeded();
await product.hover();
// Click inside overlay
await page.locator('.product-overlay a:has-text("Add to cart")').first().click();
// Confirmation
await expect(page.getByText('Added!')).toBeVisible();
// Go to cart
await page.getByRole('link', { name: 'View Cart' }).click();

//    // Direct click (no hover)
// await page.locator('a:has-text("Add to cart")').first().click();
// await expect(page.getByText('Added!')).toBeVisible(); // optional but good
// await page.getByRole('link', { name: 'View Cart' }).click();

  // 🔹 Checkout
const checkoutBtn = page.locator('.check_out');
await expect(checkoutBtn).toBeVisible();
await checkoutBtn.click();
await expect(page.getByText('Address Details')).toBeVisible();
// Place order
await page.getByRole('link', { name: 'Place Order' }).click();


// 🔹 Payment Page Wait
await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
// Card details
await page.locator('input[name="name_on_card"]').fill('Shubham');
await page.locator('input[name="card_number"]').fill('4111111111111111');
// Better locators
await page.locator('input[name="cvc"]').fill('311');
await page.locator('input[name="expiry_month"]').fill('02');
await page.locator('input[name="expiry_year"]').fill('2028');
// Pay button
const payBtn = page.getByRole('button', { name: 'Pay and Confirm Order' });
await expect(payBtn).toBeVisible();
await payBtn.click();
// Success validation
await expect(page.getByText('Order Placed!')).toBeVisible();

 
// 🔹 Wait for button
const downloadBtn = page.getByRole('link', { name: 'Download Invoice' });
await expect(downloadBtn).toBeVisible();
// 🔹 Wait + click together
const [download] = await Promise.all([
  page.waitForEvent('download'),
  downloadBtn.click()
]);
// 🔹 File name print
console.log('File downloaded:', download.suggestedFilename());

});

