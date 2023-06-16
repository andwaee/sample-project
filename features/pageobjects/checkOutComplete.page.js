import Page from './page.js';
import CommonUtility from '../common-utility/common-util.js';

class CheckOutCompletePage extends Page {
    
    get completeIcon () {
        return $(`//img[@alt='Pony Express']`);
    }

    async validateCompleteIcon(){
        await expect(this.completeIcon).toBeDisplayed();
    }

}

export default new CheckOutCompletePage();