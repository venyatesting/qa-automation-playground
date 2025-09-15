const { sum, multiply, isEven } = require("../js-basics/functions");

test("sum работает правильно", () => {
  expect(sum(2, 3)).toBe(5);
});

test("multiply работает правильно", () => {
  expect(multiply(4, 5)).toBe(20);
});

test("isEven работает правильно", () => {
  expect(isEven(10)).toBe(true);
  expect(isEven(7)).toBe(false);
});
