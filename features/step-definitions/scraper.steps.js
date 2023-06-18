import { Given, When, Then } from "@wdio/cucumber-framework";
import CommonUtility from "../common-utility/common-util.js";
import ScapePage from "../pageobjects/scrape.page.js";
import { JSDOM } from "jsdom";

When(/^I scrape website$/, {timeout: 600000}, async () => {
  let prices = [];
  let names = [];
  let data = [];

  for (let i = 1; i <= 2; i++) {
    await ScapePage.open();
    const pagesource = await browser.getPageSource();
    const dom = new JSDOM(pagesource);
    const document = await dom.window.document;
    const ItemPrice = await document.querySelectorAll("div.aBrP0");
    const itemName = await document.querySelectorAll("div.RfADt");
    console.log("log heres");
    console.log(ItemPrice.length);

    for (let price of ItemPrice) {
      const ItemPrice = await price.querySelector("span");
      const priceText = await ItemPrice.textContent;
      await prices.push(priceText);
    }

    for (let name of itemName) {
      const itemName = await name.querySelector("a");
      const nameText = await itemName.textContent;
      await names.push(nameText);
    }

    for (let i = 0; i < ItemPrice.length; i++) {
      await data.push(`Name: ${names[i]} @ Price: ${prices[i]}`);
      console.log(data);
    }

    await CommonUtility.writeFile("furniture " + i , data);
    await ScapePage.pageNumber(i).click()
  }
});
