import * as supertest from 'supertest';

import { app } from '../../main/app';

const pa11y = require('pa11y');

const agent = supertest.agent(app);

class Pa11yResult {
  documentTitle: string;
  pageUrl: string;
  issues: PallyIssue[];

  constructor(documentTitle: string, pageUrl: string, issues: PallyIssue[]) {
    this.documentTitle = documentTitle;
    this.pageUrl = pageUrl;
    this.issues = issues;
  }
}

class PallyIssue {
  code: string;
  context: string;
  message: string;
  selector: string;
  type: string;
  typeCode: number;

  constructor(code: string, context: string, message: string, selector: string, type: string, typeCode: number) {
    this.code = code;
    this.context = context;
    this.message = message;
    this.selector = selector;
    this.type = type;
    this.typeCode = typeCode;
  }
}

async function ensurePageCallWillSucceed(url: string): Promise<void> {
  try {
    console.log(`Ensuring page call for URL: ${url}`);
    const res = await agent.get(url);
    console.log(`Response for URL: ${url} - Status: ${res.status} - Text: ${res.text.substring(0, 100)}...`);

    if (res.redirect) {
      throw new Error(`Call to ${url} resulted in a redirect to ${res.get('Location')}`);
    }
    if (res.serverError) {
      throw new Error(`Call to ${url} resulted in internal server error: ${res.text}`);
    }
  } catch (err) {
    console.error(`Error ensuring page call for URL ${url}:`, err);
    throw err;
  }
}

async function runPally(url: string): Promise<Pa11yResult> {
  try {
    console.log(`Running Pa11y on URL: ${url}`);

    // Make sure we have a complete URL for pa11y
    const baseUrl = 'http://localhost';
    const fullUrl = new URL(url, baseUrl).toString();

    // Run pa11y with appropriate options
    const result = await pa11y(fullUrl, {
      hideElements: '.govuk-footer__licence-logo, .govuk-header__logotype-crown',
      // Add these options for better stability with pa11y 8.0.0
      timeout: 30000,
      wait: 1000,
      chromeLaunchConfig: {
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      }
    });

    // Extract only what we need to avoid circular references
    const safeResult: Pa11yResult = new Pa11yResult(
      result.documentTitle || '',
      result.pageUrl || '',
      Array.isArray(result.issues) ? result.issues.map((issue: any) => new PallyIssue(
        issue.code || '',
        issue.context || '',
        issue.message || '',
        issue.selector || '',
        issue.type || '',
        issue.typeCode || 0
      )) : []
    );

    console.log(`Pa11y result for URL: ${fullUrl} - Found ${safeResult.issues.length} issues`);
    return safeResult;
  } catch (err) {
    console.error(`Pa11y error on URL ${url}:`, err);
    throw err;
  }
}

function expectNoErrors(messages: PallyIssue[]): void {
  const errors = messages.filter(m => m.type === 'error');

  if (errors.length > 0) {
    const errorsAsJson = `${JSON.stringify(errors, null, 2)}`;
    console.error('Accessibility issues found:', errorsAsJson);
    throw new Error(`There are accessibility issues:
${errorsAsJson}
`);
  }
}

function testAccessibility(url: string): void {
  describe(`Page ${url}`, () => {
    // Set a longer timeout for accessibility tests
    jest.setTimeout(60000);

    test('should have no accessibility errors', async () => {
      try {
        console.log(`Starting accessibility test for URL: ${url}`);
        await ensurePageCallWillSucceed(url);

        // Create a proper URL for pa11y
        const fullUrl = url.startsWith('http') ? url : `http://localhost${url}`;

        const result = await runPally(fullUrl);
        expect(result.issues).toEqual(expect.any(Array));
        expectNoErrors(result.issues);
      } catch (err) {
        console.error(`Accessibility test failed for URL ${url} with error:`, err);
        throw err;
      }
    });
  });
}

describe('Accessibility', () => {
  // Set up error handling
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });

  process.on('uncaughtException', err => {
    console.error('Uncaught Exception thrown', err);
    process.exit(1);
  });

  // Run tests in sequence, not parallel
  beforeAll(() => {
    jest.setTimeout(60000); // 60 seconds global timeout
  });

  // Basic routes
  testAccessibility('/');

  // TODO: include each path of your application in accessibility checks
});
