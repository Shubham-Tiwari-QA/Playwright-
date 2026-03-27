const { test } = require('@playwright/test');
const { TeacherDemoPage } = require('../pages/TeacherDemoPage.js');

test('Teacher Demo Test', async ({ page }) => {

  const demo = new TeacherDemoPage(page);

  await demo.goto();
  await page.waitForLoadState('networkidle'); // ADD THIS
  await demo.fillForm();
  await demo.submitForm();

});