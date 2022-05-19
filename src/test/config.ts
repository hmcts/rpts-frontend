// better handling of unhandled exceptions
process.on('unhandledRejection', reason => {
  throw reason;
});

const testUrl = process.env.TEST_URL || 'http://localhost:3120';
const testHeadlessBrowser = process.env.TEST_HEADLESS ? process.env.TEST_HEADLESS === 'true' : true;
const waitForTimeout = 10000;

export const config = {
  TEST_URL: testUrl,
  TestHeadlessBrowser: testHeadlessBrowser,
  TestSlowMo: 250,
  WaitForTimeout: waitForTimeout,
  helpers: {
    Playwright: {
      url: testUrl,
      show: true,
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded',
      waitForAction: 1000,
      getPageTimeout: 30000,
      waitForTimeout: 30000,
      windowSize: '1366x784',
      ignoreHTTPSErrors: true
    }
  },
  Gherkin: {
    features: './features/**/*.feature',
    steps: '../functional/steps/*.ts',
  }
};
