const { defineConfig, devices } = require('@playwright/test');

/**
 * Configurations for cross browser testing 
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
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], 
      },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], 
      },
    },

    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'],
      },
    },
  ],
});

