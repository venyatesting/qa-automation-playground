const users = [
  { name: "Иван", age: 30, skills: ["manual testing", "automation"] },
  { name: "Мария", age: 22, skills: ["qa processes", "JavaScript"] },
  { name: "Алексей", age: 28, skills: ["automation in progress", "React", "JavaScript"] }
];

// Фильтруем пользователей, у которых есть JavaScript
function getUsersWithJS(usersArray) {
  return usersArray.filter(user => user.skills.includes("JavaScript"));
}

// Находим первого пользователя старше 25 и умеющего React
function findReactUserAbove25(usersArray) {
  return usersArray.find(user => user.age > 25 && user.skills.includes("React"));
}

// Выводим для проверки (только при прямом запуске)
if (require.main === module) {
  console.log("Пользователи с JavaScript:", getUsersWithJS(users));
  console.log("Первый пользователь старше 25 с React:", findReactUserAbove25(users));
}

module.exports = { users, getUsersWithJS, findReactUserAbove25 };
