const { users, getUsersAbove25, getSkillsAbove25 } = require("../js-basics/users");

test("getUsersAbove25 возвращает правильные имена", () => {
  expect(getUsersAbove25(users)).toEqual(["Иван", "Алексей"]);
});

test("getSkillsAbove25 возвращает правильные навыки", () => {
  expect(getSkillsAbove25(users)).toEqual([
    "manual testing",
    "automation",
    "automation in progress",
    "React"
  ]);
});
