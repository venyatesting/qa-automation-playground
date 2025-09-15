const profile = require("../js-basics/profile");

test("у профиля правильное имя", () => {
  expect(profile.name).toBe("Иван");
});

test("возраст указан числом", () => {
  expect(typeof profile.age).toBe("number");
  expect(profile.age).toBeGreaterThan(18);
});

test("isTester = true", () => {
  expect(profile.isTester).toBe(true);
});

test("в навыках есть manual testing", () => {
  expect(profile.skills).toContain("manual testing");
});
