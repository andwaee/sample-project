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

  async scrollToText(text) {
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`
    );
  }

  async horizontalSwipeByPercentage(startPercentage, endPercentage, anchorPercentage, delay) {
    const { width, height } = await driver.getWindowSize();
    const anchor = (width * anchorPercentage) / 100;
    const startPoint = (height * startPercentage) / 100;
    const endPoint = (height * endPercentage) / 100;

    console.log('validate here:' + await JSON.stringify(await driver.getWindowSize()));
    console.log('validate here:' + await JSON.stringify(anchor));
    console.log('validate here:' + await JSON.stringify(startPoint));
    console.log('validate here:' + await JSON.stringify(endPoint));
    await driver.touchPerform([
      {
        action: "press",
        options: {
          x: anchor,
          y: startPoint,
        },
      },
      {
        action: "wait",
        options: {
          ms: delay,
        },
      },
      {
        action: "moveTo",
        options: {
          x: anchor,
          y: endPoint,
        },
      },
      {
        action: "release",
        options: {},
      },
    ]);
  }
}

export default new MobileCommonUtility();
