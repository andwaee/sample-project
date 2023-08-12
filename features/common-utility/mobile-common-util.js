import cucumberJson from "wdio-cucumberjs-json-reporter";
import ExcelJS from "exceljs";
import fs from "fs";

class MobileCommonUtility {
  async takeScreenshot() {
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }

  async addInfoInReport(info) {
    cucumberJson.attach(info);
  }

  async scrollToText(text){
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`)
  }
}

export default new MobileCommonUtility();