const { test, expect } = require('@playwright/test');

test('заполнение формы и проверка результата', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_forms.asp');

  // Находим поле "First name"
  const firstNameInput = await page.locator('input[name="firstname"]');
  await firstNameInput.fill('Иван');

  // Находим поле "Last name"
  const lastNameInput = await page.locator('input[name="lastname"]');
  await lastNameInput.fill('Иванов');

  // Кнопку "Submit" — на этой странице она просто input[type="submit"]
  const submitButton = await page.locator('input[type="submit"]');
  await submitButton.click();

  // Так как страница не отправляет форму на сервер, проверим, что поля всё ещё содержат текст
  await expect(firstNameInput).toHaveValue('Иван');
  await expect(lastNameInput).toHaveValue('Иванов');
});
