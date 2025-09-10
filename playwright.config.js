const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  workers: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',  // скриншоты только при падении
    video: 'retain-on-failure'      // видео только при падении
  },
  reporter: [
    ['list'],                          // стандартный вывод в консоль
    ['allure-playwright']              // подключаем Allure
  ],
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox' } },
    { name: 'webkit',   use: { browserName: 'webkit' } }
  ]
};

module.exports = config;
