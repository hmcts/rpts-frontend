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
    console.log(`Response for URL: ${url} - Status: ${res.status} - Text: ${res.text}`);

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
    const result = await pa11y(url, {
      hideElements: '.govuk-footer__licence-logo, .govuk-header__logotype-crown',
    });
    console.log(`Pa11y result for URL: ${url} - Result:`, result);
    return result;
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
    test('should have no accessibility errors', async () => {
      try {
        console.log(`Starting accessibility test for URL: ${url}`);
        await ensurePageCallWillSucceed(url);
        const result = await runPally(`http://localhost:${process.env.PORT || 3120}${url}`);
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
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });

  process.on('uncaughtException', err => {
    console.error('Uncaught Exception thrown', err);
    process.exit(1);
  });

  testAccessibility('/');

  // TODO: include each path of your application in accessibility checks
});
