import Page from './page.js';


class HomePage extends Page {

    get homePageIcon () {
        return $(`//span[@class='title']`);
    }
    get cartIcon(){
        return $(`//a[@class='shopping_cart_link']`);
    }

    addToCartButton(product){
        return $(`//a/div[text()='${product}']//ancestor::div[@class='inventory_item_description']/div[@class='pricebar']/button`);
    }


    async addItemToCart(product){
        await this.addToCartButton(product).click();
    }

    async addItemsToCart(products = []){
        for(let product of products){
            await this.addItemToCart(product)
        }
    }

    async clickCartIcon(){
        await this.cartIcon.click();
    }

}

export default new HomePage();

