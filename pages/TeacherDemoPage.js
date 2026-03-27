const { test } = require('@playwright/test');

class TeacherDemoPage {

  constructor(page) {
    this.page = page;

    this.dateBtn = page.locator('button').first();
    this.phoneInput = page.getByRole('textbox', { name: "Parent's Phone Number *" });
    this.nameInput = page.getByRole('textbox', { name: "Parent's Name * Parent's Email" });
    this.emailInput = page.getByRole('textbox', { name: 'Select Your Child Age' });
    this.ageDropdown = page.getByLabel('Child Age *');

    this.packageDropdown = page.getByRole('combobox', { name: 'Select Package' });
    this.packageOption = page.getByRole('treeitem', { name: 'Mom Toddler' });

    this.subjectDropdown = page.getByText('Subject / Package *');
    this.subjectOption = page.getByRole('treeitem', { name: 'Phonics Basic' });

    this.demoRadio = page.getByRole('radio', { name: 'Request 1-1 Demo' });

    this.dateInput = page.getByRole('textbox', { name: 'Preferred Date*' });
    this.dateSelect = page.getByRole('table').getByText('27', { exact: true });

    this.timeInput = page.getByRole('textbox', { name: 'Preferred Time *' });
    this.timeSelect = page.getByText('05:00 PM');

    this.executiveDropdown = page.getByRole('combobox', { name: 'Select Executive' });
    this.executiveOption = page.getByRole('treeitem', { name: 'Abhishek Kumar', exact: true });

    this.submitBtn = page.getByRole('button', { name: 'Submit' });
  }

  async goto() {
    await this.page.goto('https://stagelearn.classmonitor.com/demo');
  }

  async fillForm() {

    await this.page.waitForLoadState('domcontentloaded');

    await this.dateBtn.click();

    await this.phoneInput.fill('8523366552');
    await this.nameInput.fill('test');
    await this.emailInput.fill('test@gmail.com');

    await this.ageDropdown.selectOption('5');

    await this.packageDropdown.click();
    await this.packageOption.click();

    await this.subjectDropdown.click();

    // await expect(this.subjectOption).toBeVisible();
    // await this.subjectOption.waitFor({ state: 'visible' });

    // await this.subjectOption.click();

   // ✅ Correct radio usage
  await this.demoRadio.check();

  await this.dateInput.click();
  await this.dateSelect.click();

  await this.timeInput.waitFor({ state: 'visible' });
  await this.timeInput.click();
  await this.timeSelect.click();

  await this.executiveDropdown.click();
  await this.executiveOption.click();
}

  async submitForm() {
    await this.submitBtn.click();
  }
}

module.exports = { TeacherDemoPage };
