const users = [
  { name: "Иван", age: 30, skills: ["manual testing", "automation"] },
  { name: "Мария", age: 22, skills: ["qa processes", "JavaScript"] },
  { name: "Алексей", age: 28, skills: ["automation in progress", "React"] }
];

// Функция возвращает имена пользователей старше 25
function getUsersAbove25(usersArray) {
  return usersArray.filter(user => user.age > 25).map(user => user.name);
}

// Функция возвращает все навыки пользователей старше 25
function getSkillsAbove25(usersArray) {
  return usersArray
    .filter(user => user.age > 25)
    .flatMap(user => user.skills); // объединяем массивы навыков в один
}

// Проверка через console.log (только при прямом запуске)
if (require.main === module) {
  console.log("Имена пользователей старше 25:", getUsersAbove25(users));
  console.log("Навыки пользователей старше 25:", getSkillsAbove25(users));
}

module.exports = { users, getUsersAbove25, getSkillsAbove25 };
