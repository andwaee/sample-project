

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get homePageIcon () {
        return $(`//div[text()='Swag Labs']`);
    }



}

export default new HomePage();

//ang panget ni andrei.js
