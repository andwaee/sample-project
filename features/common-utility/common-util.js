import cucumberJson from 'wdio-cucumberjs-json-reporter';

class CommonUtility{

     async takeScreenshot(){
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    async addInfoInReport(info){
        cucumberJson.attach(info);
    }
}

export default new CommonUtility();