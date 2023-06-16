import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CommonUtility from '../common-utility/common-util.js';
import CheckoutInformationPage from '../pageobjects/checkOutInformation.page.js';
import CheckOutOverviewPage from '../pageobjects/checkOutOverview.page.js';
import CheckOutCompletePage from '../pageobjects/checkOutComplete.page.js';


//#region 
Given(/^I am already logged in page$/, async () => {
    await LoginPage.userIsLoggedIn();
});

When(/^I checkout (.*) product$/, async (productName) => {
    await HomePage.addItemToCart(productName);
    await HomePage.clickCartIcon();
    await CartPage.clickCheckoutButton();
    await CheckoutInformationPage.fillInFirstName();
    await CheckoutInformationPage.fillInLastName();
    await CheckoutInformationPage.fillInZipCode();
    await CheckoutInformationPage.clickContinueButton();
    await CommonUtility.takeScreenshot();
    await CheckOutOverviewPage.clickFinishButton();
});

Then(/^I should successfully checkout the product$/, async () => {
    await CheckOutCompletePage.validateCompleteIcon();
    await CommonUtility.takeScreenshot();
});

//#endregion

//#region 
When(/^I checkout$/, async (productNames) => {
    const products = await productNames.raw();
    await HomePage.addItemsToCart(products);
    await HomePage.clickCartIcon();
    await CartPage.clickCheckoutButton();
    await CheckoutInformationPage.fillInFirstName();
    await CheckoutInformationPage.fillInLastName();
    await CheckoutInformationPage.fillInZipCode();
    await CheckoutInformationPage.clickContinueButton();
    await CommonUtility.takeScreenshot();
    await CheckOutOverviewPage.clickFinishButton();
});

Then(/^I should successfully checkout the products$/, async () => {
    await CheckOutCompletePage.validateCompleteIcon();
    await CommonUtility.takeScreenshot();
});

//#endregion


