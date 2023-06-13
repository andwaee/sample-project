import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CommonUtility from '../common-utility/common-util.js';


Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
  await CommonUtility.takeScreenshot();

});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)

});

Then(/^I should see a icon$/, async () => {
    await expect(await HomePage.homePageIcon).toBeDisplayed();
    await CommonUtility.takeScreenshot();
});

