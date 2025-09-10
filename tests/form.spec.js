const { test, expect } = require('@playwright/test');

test('заполнение локальной формы и проверка результата', async ({ page }) => {
  await page.goto('http://localhost:8080/form.html', { waitUntil: 'domcontentloaded' });

  await page.screenshot({ path: 'debug_page.png' }); // снимок страницы

  const firstNameInput = page.locator('#firstname');
  const lastNameInput = page.locator('#lastname');
  const submitBtn = page.locator('#submitBtn');
  const result = page.locator('#result');

  await firstNameInput.waitFor({ state: 'visible' });
  await lastNameInput.waitFor({ state: 'visible' });

  await firstNameInput.fill('Иван');
  await lastNameInput.fill('Иванов');

  await submitBtn.click();

  await expect(result).toHaveText('Привет, Иван Иванов!', { timeout: 5000 });
});
