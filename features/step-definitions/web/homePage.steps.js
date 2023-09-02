import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/web/login.page.js';
import HomePage from '../../pageobjects/web/home.page.js';
import CartPage from '../../pageobjects/web/cart.page.js';
import WebCommonUtility from '../../common-utility/web-common-util.js';
import CheckoutInformationPage from '../../pageobjects/web/checkOutInformation.page.js';
import CheckOutOverviewPage from '../../pageobjects/web/checkOutOverview.page.js';
import CheckOutCompletePage from '../../pageobjects/web/checkOutComplete.page.js';


//#region 
Given(/^user is in the product Home Page$/, async () => {
    await LoginPage.userIsLoggedIn();
});

When(/^user checkouts (.*) product$/, async (productName) => {
    await HomePage.addItemToCart(productName);
    await HomePage.clickCartIcon();
    await CartPage.clickCheckoutButton();
    await CheckoutInformationPage.fillInFirstName();
    await CheckoutInformationPage.fillInLastName();
    await CheckoutInformationPage.fillInZipCode();
    await CheckoutInformationPage.clickContinueButton();
    await WebCommonUtility.takeScreenshot();
    await CheckOutOverviewPage.clickFinishButton();
});

Then(/^user should successfully checkout the products$/, async () => {
    await CheckOutCompletePage.validateCompleteIcon();
    await WebCommonUtility.takeScreenshot();
});

//#endregion

//#region 
When(/^user checkout products$/, async (productNames) => {
    const products = await productNames.raw();
    await HomePage.addItemsToCart(products);
    await HomePage.clickCartIcon();
    await CartPage.clickCheckoutButton();
    await CheckoutInformationPage.fillInFirstName();
    await CheckoutInformationPage.fillInLastName();
    await CheckoutInformationPage.fillInZipCode();
    await CheckoutInformationPage.clickContinueButton();
    await WebCommonUtility.takeScreenshot();
    await CheckOutOverviewPage.clickFinishButton();
});

Then(/^I should successfully checkout the products$/, async () => {
    await CheckOutCompletePage.validateCompleteIcon();
    await WebCommonUtility.takeScreenshot();
});

//#endregion


