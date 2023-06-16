

import Page from './page.js';


class HomePage extends Page {

    get homePageIcon () {
        return $(`//span[@class='title']`);
    }

     /**
    * This function will add an order to the cart
    * @param product name of the product. Ex: Sauce Labs Backpack, Sauce Labs Bike Light or Sauce Labs Bolt T-Shirt etc.
    */
    addItemToCart(product){
        return $(`//a/div[text()='${product}']//ancestor::div[@class='inventory_item_description']/div[@class='pricebar']/button`);
    }

}

export default new HomePage();

