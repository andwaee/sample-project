import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/web/login.page.js';
import HomePage from '../..//pageobjects/web/home.page.js';
import WebCommonUtility from '../../common-utility/web-common-util.js';


Given(/^user is on login Page$/, async () => {
  await LoginPage.open();
  await WebCommonUtility.takeScreenshot();

});

When(/^user enters username and password$/, async () => {
    await LoginPage.login()

});

Then(/^user should see Home page$/, async () => {
    await expect(await HomePage.homePageIcon).toBeDisplayed();
    await WebCommonUtility.takeScreenshot();
    await WebCommonUtility.addInfoInReport(process.env.username);
});

