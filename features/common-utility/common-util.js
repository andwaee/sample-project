import cucumberJson from "wdio-cucumberjs-json-reporter";
import ExcelJS from "exceljs";
import fs from "fs";

class CommonUtility {
  async takeScreenshot() {
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }

  async addInfoInReport(info) {
    cucumberJson.attach(info);
  }

  async readExcelFile() {
    const filePath = "./testData.xlsx";
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1"); // Assuming data is present in Sheet1

    const userData = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        // Skip the header row
        const user = {
          firstName: row.getCell(1).value,
          lastName: row.getCell(2).value,
          zipCode: row.getCell(3).value,
          // Add more properties based on your Excel file columns
        };
        userData.push(user);
      }
    });

    return userData;
  }

  async writeFile(fileName, data) {
    const filePath = `./exported-data/${fileName}.json`;
    await this.createFile(filePath);
    await fs.writeFile(filePath, await JSON.stringify(data), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("File written successfully!");
    });
  }

  async createFile(filePath) {
    if (await fs.existsSync(filePath)) {
      console.log("File already exists.");
    } else {
      await fs.writeFileSync(filePath, "{}");
      console.log("File created");
    }
  }

  async writeExcelFile(userData = [], count) {
    const filePath = "./testData.xlsx";
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet2");

    userData.forEach((product, index) => {
      const row = worksheet.getRow(index + count + 2);
      row.getCell(1).value = product.name;
      row.getCell(2).value = product.price;
    });

    await workbook.xlsx.writeFile(filePath);
  }
}

export default new CommonUtility();
