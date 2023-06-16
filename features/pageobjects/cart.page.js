import Page from './page.js';


class CartPage extends Page {

    get checkoutButton () {
        return $('#checkout');
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

}

export default new CartPage();