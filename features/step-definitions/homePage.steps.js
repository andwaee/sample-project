import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CommonUtility from '../common-utility/common-util.js';


Given(/^I am already logged in page$/, async () => {
    await LoginPage.userIsLoggedIn();
});

When(/^I checkout (.*) product$/, async (productName) => {
    console.log(productName)
    await HomePage.addItemToCart(productName);

});

Then(/^I should successfully checkout (.*)$/, async (productName) => {

});