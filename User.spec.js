
import { test, expect } from '@playwright/test';

test('Main Page', async ({ page }) => {
  await page.goto('https://stagelearn.classmonitor.com/user-preference');
});

test('Old Page', async ({ page }) => {
  await page.goto('https://stagelearn.classmonitor.com/user-preference/old');
});

test('Group Page', async ({ page }) => {
  await page.goto('https://stagelearn.classmonitor.com/user-preference/group');
});
  
  // ---------- BASIC DETAILS ----------
  await page.getByPlaceholder('Enter phone number').fill('7412859636');
  await page.getByPlaceholder('Enter parent name').fill('Root');
  await page.locator('#email').fill('test@gmail.com');

  await page.getByPlaceholder("Enter child's full name").fill('Shubham');
  await page.getByPlaceholder('Age (years)').fill('2');

  // ---------- PACKAGE SELECTION ----------

// Open dropdown
await page.locator('.select2-selection').first().click();

// Select package
await page.locator('.pkg-name', { hasText: 'Phonics Class for Moms' }).click();

// Select kit
await page.locator('#kit_option').selectOption('withkit');

  // ---------- SHIPPING DETAILS ----------
  await page.getByPlaceholder('Enter name for shipping').fill('Tiwari');
  await page.getByPlaceholder('Enter email for shipping').fill('tiwari@gmail.com');
  await page.getByPlaceholder('Enter street address').fill('Indore');
  await page.getByPlaceholder('Enter locality / area').fill('Indore');

  await page.locator('#shipping_country').selectOption({ index: 1 });
  await page.locator('#shipping_state').selectOption({ index: 1 });
  await page.locator('#shipping_city').selectOption({ index: 1 });

  await page.getByPlaceholder('Enter pincode / zip code').fill('458220');
  await page.getByPlaceholder('Agent contact number').fill('7856633333');

  // ---------- PAYMENT ----------
  await page.getByText('Partial').click();

  await page.locator('#paid_amt').fill('12000');
  await page.locator('#remain_amt').fill('6000');

  // ---------- DATE ----------
  await page.locator('#StartDate').fill('2026-04-03');

  // ---------- SLOTS ----------
  await page.getByText('Mon', { exact: true }).click();
  await page.locator('#timeMon').selectOption('01:00');

  await page.getByText('Wed', { exact: true }).click();
  await page.locator('#timeWed').selectOption('02:00');

  await page.getByText('Fri', { exact: true }).click();
  await page.locator('#timeFri').selectOption('03:00');

  // ---------- SUBMIT ----------
  const submitBtn = page.getByRole('button', { name: /Submit Enrollment/i });

  await expect(submitBtn).toBeVisible();
  await submitBtn.click();







  