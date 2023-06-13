

import Page from './page.js';


class HomePage extends Page {

    get homePageIcon () {
        return $(`//div[text()='Swag Labs']`);
    }

}

export default new HomePage();

