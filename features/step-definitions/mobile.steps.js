import { Given, When, Then } from "@wdio/cucumber-framework";

import MobileScreen from "../pageobjects/mobile.screen.js";
import CommonUtility from "../common-utility/common-util.js";

Given(/^App is already installed$/, async () => {
    await expect(MobileScreen.headerText).toBeDisplayed();
    await CommonUtility.takeScreenshot();
});

When(/^I navigate to Alert Dialog$/, async () => {
  await MobileScreen.navigateToDialog();
  await CommonUtility.takeScreenshot();
});

Then(/^I should see the Alert Dialog$/, async () => {
  await expect(MobileScreen.alertHeaderTitle).toBeDisplayed();
  await CommonUtility.takeScreenshot();
});
