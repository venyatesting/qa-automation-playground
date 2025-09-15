const { users, getUsersWithJS, findReactUserAbove25 } = require("../js-basics/users-filter");

test("getUsersWithJS возвращает правильных пользователей", () => {
  expect(getUsersWithJS(users)).toEqual([
    { name: "Мария", age: 22, skills: ["qa processes", "JavaScript"] },
    { name: "Алексей", age: 28, skills: ["automation in progress", "React", "JavaScript"] }
  ]);
});

test("findReactUserAbove25 возвращает правильного пользователя", () => {
  expect(findReactUserAbove25(users)).toEqual(
    { name: "Алексей", age: 28, skills: ["automation in progress", "React", "JavaScript"] }
  );
});
