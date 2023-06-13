

import Page from './page.js';
import CommonUtility from '../common-utility/common-util.js';


class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await CommonUtility.takeScreenshot();
        await this.btnSubmit.click();
    }


    open () {
        return super.open('https://www.saucedemo.com/');
    }
}

export default new LoginPage();
