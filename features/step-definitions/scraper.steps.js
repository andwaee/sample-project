import { Given, When, Then } from "@wdio/cucumber-framework";
import CommonUtility from "../common-utility/common-util.js";
import ScrapePage from "../pageobjects/scrape.page.js";
import { JSDOM } from "jsdom";

When(/^I scrape website$/, { timeout: 600000 }, async () => {
  let prices = [];
  let names = [];
  let data = [];
  let counter = 0;
  let limit = 8;
  await ScrapePage.open();
  for (let i = 1; i <= limit; i++) {
    await ScrapePage.clickPageNumber(i);
    const pagesource = await browser.getPageSource();
    const dom = new JSDOM(pagesource);
    const document = await dom.window.document;
    const ItemPrice = await document.querySelectorAll("div.aBrP0");
    const itemName = await document.querySelectorAll("div.RfADt");

    counter += ItemPrice.length;

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

    if (i == limit) {
      for (let i = 0; i < counter; i++) {
        await data.push(`Name: ${names[i]} @ Price: ${prices[i]}`);
        const excelData = [{ name: names[i], price: prices[i] }];
        await CommonUtility.writeExcelFile(excelData, i);
      }
      await CommonUtility.writeFile("furniture-page", data);
    }

    if (i != limit) {
      (await ScrapePage.pageNumber(i + 1)).waitForExist();
      await ScrapePage.clickPageNumber(i + 1);
    }
  }
});
