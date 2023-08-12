// import MobileCommonUtility from '../../common-utility/mobile-common-util';

class MobileScreen {
    
    get appMenu () {
        return $('~App');
    }

    get alertDialogMenu () {
        return $('~Alert Dialogs');
    }

    get listDialogMenu () {
        return $('~List dialog');
    }

    get alertHeaderTitle () {
        return $('//android.widget.TextView[@text="Header title"]');
    }

    get headerText(){
        return $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView')
    }

    get customTitleMenu(){
        return $('~Custom Title');
    }

    get activityMenu(){
        return $('~Activity');
    }

    get fields(){
        return $$('android.widget.EditText');
    }

    get changeLeftButton(){
        return $('~Change Left');
    }

    get changeRightButton(){
        return $('~Change Right');
    }

    get leftText(){
        return $$('android.widget.EditText')[0];
    }

    get rightText(){
        return $$('android.widget.EditText')[1];
    }


    async navigateToDialog(){
        await this.appMenu.click();
        await this.alertDialogMenu.click();
        await this.listDialogMenu.click();
    }

    async navigateToCustomTitleScreen(){
        await this.appMenu.click();
        await this.activityMenu.click();
        await this.customTitleMenu.click();
    }

    async changeTitles(){
        const leftFieldValue = 'Left Value is Changed';
        const rightFieldValue = 'Right Value is Changed';
        await this.fields[0].click();
        await this.fields[0].clearValue();
        await this.fields[0].addValue(leftFieldValue);
        await this.changeLeftButton.click();
        await this.fields[1].click();
        await this.fields[1].clearValue();
        await this.fields[1].addValue(rightFieldValue);
        await this.changeRightButton.click();

        return {leftFieldValue, rightFieldValue}
    }

    async validateFieldifChanged(leftText, rightText){
        await expect(this.leftText).toHaveText(leftText);
        await expect(this.rightText).toHaveText(rightText);
    }

}

export default new MobileScreen();