const { test, expect } = require('@playwright/test');

test('заполнение локальной формы и проверка результата', async ({ page }) => {
  await page.goto('http://localhost:8080/form.html');

  const firstNameInput = page.locator('#firstname');
  const lastNameInput = page.locator('#lastname');

  await firstNameInput.waitFor({ state: 'visible' });
  await lastNameInput.waitFor({ state: 'visible' });

  await firstNameInput.fill('Иван');
  await lastNameInput.fill('Иванов');

  await page.locator('#submitBtn').click();

  await expect(page.locator('#result')).toHaveText('Привет, Иван Иванов!');
});
