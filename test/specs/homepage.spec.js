import HomePage from "../page/HomePage";

describe('HOME PAGE', () => {
    before(() => {
        HomePage.open()
    });
    it('should go to the Homepage ',() => {
        HomePage.verifyElementIsDisplayed(HomePage.siteName);
    })

    it('should login button be displayed ',() => {
        HomePage.verifyElementIsDisplayed(HomePage.loginBtn);
    })

    it('should',() => {
        //expect(HomePage.loginBtn.getAttribute('href')).eq('https://stage.localcoding.us/user/login');
        expect(HomePage.loginBtn.getAttribute('href')).includes('/user/login');
    });
});