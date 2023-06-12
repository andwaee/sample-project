

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $(`//div/span[text()='Products']`);
    }
}

export default new SecurePage();

//ang panget ni andrei.js
