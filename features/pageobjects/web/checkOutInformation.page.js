import Page from './page.js';
import WebCommonUtility from '../../common-utility/web-common-util.js';
let testData = await WebCommonUtility.readExcelFile();

class CheckOutInformationPage extends Page {
    
    get firstNameField () {
        return $('#first-name');
    }

    get lastNameField () {
        return $('#last-name');
    }

    get zipCodeField () {
        return $('#postal-code');
    }
    get continueButton () {
        return $('#continue');
    }

    async fillInFirstName(){
        await this.firstNameField.setValue(testData[0].firstName);
    }

    async fillInLastName(){
        await this.lastNameField.setValue(testData[0].lastName);
    }
    
    async fillInZipCode(){
        await this.zipCodeField.addValue(testData[0].zipCode);
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }

}

export default new CheckOutInformationPage();