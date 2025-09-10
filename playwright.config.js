// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',   // <-- только эта папка
  timeout: 30 * 1000,
  use: {
    headless: false,   // <- теперь браузер будет виден
viewport: { width: 1280, height: 720 }
  }
};

module.exports = config;
