const skills = [
  "manual testing",
  "qa testing processes",   // теперь содержит 'testing'
  "automation in progress",
  "JavaScript"
];

// Фильтруем навыки, которые содержат слово 'testing'
const testingSkills = skills.filter(skill => skill.includes("testing"));

// Находим первый навык, который содержит 'automation'
const automationSkill = skills.find(skill => skill.includes("automation"));

// Выводим только при прямом запуске
if (require.main === module) {
  console.log("Навыки, связанные с тестированием:", testingSkills);
  console.log("Первый автоматизационный навык:", automationSkill);
}

// Экспортируем для тестов
module.exports = { skills, testingSkills, automationSkill };
