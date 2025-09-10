const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 60 * 1000, // увеличенный таймаут на 60 секунд
  workers: 1, // один тест за раз для стабильности
  use: {
    headless: true, // в CI headless
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox' } },
    { name: 'webkit',   use: { browserName: 'webkit' } }
  ]
};

module.exports = config;
