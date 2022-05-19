import {expect} from 'chai';

const { I } = inject();

Given('I go to RPTS postcode search page',() => {
  I.amOnPage('http://localhost:3120/?lng=en');
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

Then('I should see the text {string}',(text: string) => {
  I.see(text);
});

Then('I should see the 4 char code {string}', async (code: string) => {
  const text = await I.grabValueFrom('#fourCharCode');
   expect(code).equal(text);
});

Then('I should see the 9 char code {string}', async (code: string) => {
  const text = await I.grabValueFrom('#nineCharCode');
  expect(code).equal(text);
});

Then('I should see the address {string}', async (address: string) => {
  const text = await I.grabValueFrom('#addressesList');
  expect(address).equal(text);
});

Then('I should see the error message containing {string}', async (errMsg: string) => {
  I.see(errMsg);
});

Then('I click search button', () => {
  I.click('searchPostcodeBtn');
});

