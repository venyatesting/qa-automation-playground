const profile = require("../js-basics/profile"); // используем ранее созданный profile

test("массив skills содержит JavaScript", () => {
  expect(profile.skills).toContain("JavaScript");
});

test("возраст больше 18", () => {
  expect(profile.age).toBeGreaterThan(18);
});

test("имя указано", () => {
  expect(profile.name).toBeDefined();
});
