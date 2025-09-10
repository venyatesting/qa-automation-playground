// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',   // <-- только эта папка
  timeout: 30 * 1000,
  workers: 1,  // <- только один тест за раз
  use: {
    headless: false,   // <- теперь браузер будет виден
viewport: { width: 1280, height: 720 }
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox' } },
    { name: 'webkit',   use: { browserName: 'webkit' } }
  ]
};

module.exports = config;
