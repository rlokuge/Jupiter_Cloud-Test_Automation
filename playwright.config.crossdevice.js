const { defineConfig, devices } = require('@playwright/test');

/**
 * Configurations for cross device testing 
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

  /* Configure projects for major devices */
  projects: [
     {
       name: 'Mobile Chrome',
       use: { ...devices['Galaxy S8'], 
       isMobile: true,
      },
     },

     {
      name: 'Mobile Chrome Landscape',
      use: { ...devices['Galaxy S9+ landscape'], 
      isMobile: true,
      },
    },

    {
      name: 'Mobile Chrome Tablet',
      use: { ...devices['Galaxy Tab S4'],
      isMobile: true,
      },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'], 
        isMobile: true,
      },
    },

     {
      name: 'Mobile Safari Landscape',
      use: { ...devices['iPhone 12 Pro landscape'],
      isMobile: true,
    },
    },

    {
      name: 'Mobile Safari iPad',
      use: { ...devices['iPad (gen 7)'], 
      isMobile: false,
    },
    },
  ],
});

