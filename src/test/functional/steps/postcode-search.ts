import { expect } from 'chai';

import { config as testConfig } from '../../config';

const { I } = inject();

export const iAmOnPage = (text: string): void => {
  const url = new URL(text, testConfig.TEST_URL);
  if (!url.searchParams.has('lng')) {
    url.searchParams.set('lng', 'en');
  }
  I.amOnPage(url.toString());
};

Given('I go to RPTS postcode search page', () => {
  iAmOnPage('/');
});

Then('the page should include {string}', (text: string) => {
  I.see(text);
});

Then('I entered post code {string}', (postcode: string) => {
  I.fillField('postcode', postcode);
});

Then('I click search button', () => {
  I.click('searchPostcodeBtn');
});

Then('I should see the text {string}', (text: string) => {
  I.see(text);
});

Then('I should see the 4 char code {string}', async (code: string) => {
  expect(code).equal(await I.grabValueFrom('#fourCharCode'));
});

Then('I should see the 9 char code {string}', async (code: string) => {
  expect(code).equal(await I.grabValueFrom('#nineCharCode'));
});

Then('I should see the address {string}', async (address: string) => {
  expect(address).equal(await I.grabValueFrom('#addressesList'));
});

Then('I should see the error message containing {string}', async (errMsg: string) => {
  I.waitForText(errMsg);
  I.see(errMsg);
});

Then('I click search button', () => {
  I.click('searchPostcodeBtn');
});
