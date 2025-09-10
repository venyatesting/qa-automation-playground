const { test, expect } = require('@playwright/test');

test('GET запрос к JSONPlaceholder возвращает список постов', async ({ request }) => {
  // Отправляем GET
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  // Проверяем статус
  expect(response.status()).toBe(200);

  // Разбираем тело ответа
  const posts = await response.json();

  // Проверим, что это массив и у первого элемента есть title
  expect(Array.isArray(posts)).toBeTruthy();
  expect(posts[0]).toHaveProperty('title');
});

test('POST запрос создает новый пост', async ({ request }) => {
  const newPost = {
    title: 'QA Automation Test',
    body: 'Это пробный пост через API-тест',
    userId: 1,
  };

  // Отправляем POST
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: newPost,
  });

  // Проверка кода ответа
  expect(response.status()).toBe(201);

  // Проверка тела ответа
  const post = await response.json();
  expect(post).toMatchObject(newPost);
});
