import BasePage from "./BasePage";

class HomePage extends BasePage{
    get siteName(){return $('.site-name')};
    get loginBtn(){return browser.$('//a[contains(text(),"Login")]')}

    open() {
        super.open('/');
    }

}
export default new HomePage();