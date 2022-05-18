const { I } = inject();

Given('I go to RPTS postcode search page', () => {
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

Then('I should see the text {string}', (text: string) => {
  I.see(text);
});

Then('I should see the 4 char code {string}', async () => {
  I.seeInField('fourCharCode', '00CX');
  //I.see('00CX','fourCharCode');
  // let txt = await I.grabTextFrom('#fourCharCode');
  // console.log("................" + txt );
});

Then('I should see the 9 char code {string}', async () => {
  I.seeInField('nineCharCode', 'E08000032');
});

Then('I should see the address {string}', async () => {
  I.seeInField('addressesList', '1, PLANTATION DRIVE, BRADFORD, BD9 6SG');
});

Then('I should see the error message containing {string}', async (errMsg: string) => {
  I.see(errMsg);
});

Then('I click search button', () => {
  I.click('searchPostcodeBtn');
});

Then('I click copy button next to 4 character code text box', async () => {
  I.click('copyFourCharCode');

  await I.executeScript(() => {
    // navigator.clipboard.readText();
    return document;
  });
});
