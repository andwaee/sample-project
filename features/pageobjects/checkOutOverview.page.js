import Page from './page.js';
import CommonUtility from '../common-utility/common-util.js';

class CheckOutOverviewPage extends Page {
    
    get finishButton () {
        return $('#finish');
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }

}

export default new CheckOutOverviewPage();