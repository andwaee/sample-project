import Page from './page.js';
// import WebCommonUtility from '../../common-utility/web-common-util.js';

class CheckOutCompletePage extends Page {
    
    get completeIcon () {
        return $(`//img[@alt='Pony Express']`);
    }

    async validateCompleteIcon(){
        await expect(this.completeIcon).toBeDisplayed();
    }

}

export default new CheckOutCompletePage();