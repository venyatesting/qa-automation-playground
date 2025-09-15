const { test, expect } = require('@playwright/test');
const { users } = require('../js-basics/users-filter');

test.describe("UI фильтрация пользователей", () => {

  test("найти всех пользователей с JavaScript", async ({ page }) => {
    // имитируем страницу с таблицей
    await page.setContent(`
      <table>
        <tr><td>Иван</td><td>manual testing, automation</td></tr>
        <tr><td>Мария</td><td>qa processes, JavaScript</td></tr>
        <tr><td>Алексей</td><td>automation in progress, React, JavaScript</td></tr>
      </table>
    `);

    const jsUsers = await page.locator('td').allTextContents();
    const filteredUsers = jsUsers.filter(text => text.includes('JavaScript'));

    expect(filteredUsers.length).toBe(2); // Мария и Алексей
  });

  test("найти первого пользователя с React и возраст > 25", async ({ page }) => {
    await page.setContent(`
      <table>
        <tr><td>Иван</td><td>30</td><td>manual testing, automation</td></tr>
        <tr><td>Мария</td><td>22</td><td>qa processes, JavaScript</td></tr>
        <tr><td>Алексей</td><td>28</td><td>automation in progress, React, JavaScript</td></tr>
      </table>
    `);

    const rows = await page.locator('tr').all();
    let foundUser;
    for (const row of rows) {
      const cells = await row.locator('td').allTextContents();
      const [name, age, skills] = cells;
      if (parseInt(age) > 25 && skills.includes("React")) {
        foundUser = name;
        break;
      }
    }

    expect(foundUser).toBe("Алексей");
  });

});
