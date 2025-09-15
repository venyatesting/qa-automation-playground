const { skills, testingSkills, automationSkill } = require("../js-basics/arrays-filter");

test("skills содержит JavaScript", () => {
  expect(skills).toContain("JavaScript");
});

test("filter возвращает только навыки с testing", () => {
  expect(testingSkills).toEqual(["manual testing", "qa testing processes"]);
});

test("find возвращает первый навык с automation", () => {
  expect(automationSkill).toBe("automation in progress");
});
