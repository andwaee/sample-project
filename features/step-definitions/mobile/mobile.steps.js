import { Given, When, Then } from "@wdio/cucumber-framework";

import MobileScreen from "../../pageobjects/mobile/mobile.screen.js";
import MobileCommonUtility from "../../common-utility/mobile-common-util.js";

Given(/^App is already installed$/, async () => {
    await expect(MobileScreen.headerText).toBeDisplayed();
    await MobileCommonUtility.takeScreenshot();
});

When(/^I navigate to Alert Dialog$/, async () => {
  await MobileScreen.navigateToDialog();
  await MobileCommonUtility.takeScreenshot();
});

Then(/^I should see the Alert Dialog$/, async () => {
  await expect(MobileScreen.alertHeaderTitle).toBeDisplayed();
  await MobileCommonUtility.takeScreenshot();
});
