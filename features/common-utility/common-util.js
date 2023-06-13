import cucumberJson from 'wdio-cucumberjs-json-reporter';

class CommonUtility{

     async takeScreenshot(){
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
}

export default new CommonUtility();