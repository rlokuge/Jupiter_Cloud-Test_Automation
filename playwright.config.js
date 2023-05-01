const { defineConfig, devices } = require('@playwright/test');

/**
 * Default configurations - runs the tests on Chrome 
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({

  testDir: './tests',

  timeout: 30 * 1000, //Global timeout - how much time that test should wait before failiure i.e. 30s
  expect: {
    timeout: 5000 //Wait 5 seconds if it doesn't find any element in the webpage
  },

  // Run tests in files in parallel
  fullyParallel: true,
 
  reporter: 'html',

  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: 'test-results',

  // Shared settings for all the projects below
  use: {

    // Base URL to use in actions like page.goto('/')
    baseURL: 'https://jupiter.cloud.planittesting.com',

    // Collect trace on failed tests
    trace: 'retain-on-failure',

    video: 'retain-on-failure',

    screenshot: 'on',

    retries: 3, //Failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached

    headless: true, //Whether to run browser in headless mode
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
      ...devices['Desktop Chrome'],
      },
    },
  ],
});

