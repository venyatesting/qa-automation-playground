// js-basics/functions.js

// Функция суммирования
function sum(a, b) {
  return a + b;
}

// Стрелочная функция для умножения
const multiply = (a, b) => a * b;

// Функция для проверки, является ли число чётным
const isEven = (num) => num % 2 === 0;

// Показываем вывод только при прямом запуске
if (require.main === module) {
  console.log(sum(2, 3));
  console.log(multiply(4, 5));
  console.log(isEven(10));
  console.log(isEven(7));
}

// Экспортируем функции для тестов
module.exports = { sum, multiply, isEven };
