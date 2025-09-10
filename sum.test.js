const sum = require('./sum');

test('сумма 1 + 2 должна быть 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('сумма -1 + -1 должна быть -2', () => {
  expect(sum(-1, -1)).toBe(-2);
});
