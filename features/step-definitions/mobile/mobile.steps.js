import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";

import MobileScreen from "../../pageobjects/mobile/mobile.screen.js";
import MobileCommonUtility from "../../common-utility/mobile-common-util.js";

//#region 
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
//#endregion

//#region 
let fieldValues;
When(/^I navigate to Custom Title screen$/, async () => {
  await MobileScreen.navigateToCustomTitleScreen();
  await MobileCommonUtility.takeScreenshot();
});

When(/^I changed title fields$/, async () => {
  fieldValues = await MobileScreen.changeTitles();
  await MobileCommonUtility.takeScreenshot();
});

Then(/^I should see the Custom Title is changed$/, async () => {
  await MobileScreen.validateFieldifChanged(fieldValues.leftFieldValue, fieldValues.rightFieldValue)
});
//#endregion

Before( async() =>{
  await driver.terminateApp('io.appium.android.apis')
  await driver.activateApp('io.appium.android.apis')
})


