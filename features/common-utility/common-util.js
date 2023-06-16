import cucumberJson from "wdio-cucumberjs-json-reporter";
import ExcelJS from 'exceljs';

class CommonUtility {
  async takeScreenshot() {
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }

  async addInfoInReport(info) {
    cucumberJson.attach(info);
  }

  async readExcelFile() {
  const filePath = './testData.xlsx';
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1'); // Assuming data is present in Sheet1

  const userData = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) { // Skip the header row
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
}

export default new CommonUtility();
