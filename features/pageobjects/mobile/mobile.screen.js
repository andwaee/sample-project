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


    async navigateToDialog(){
        await this.appMenu.click();
        await this.alertDialogMenu.click();
        await this.listDialogMenu.click();
    }

}

export default new MobileScreen();