import {expect} from 'chai';
import RegisterPage from "../page/RegisterPage";
import ProfilePage from "../page/ProfilePage";
import {dataRegisterPage} from "../data/RegisterData";



describe('USER REGISTER', () => {
    before(() => {
        RegisterPage.open();
    });
    it('should go to the page Register ',() => {
        expect(RegisterPage.header.getText()).eq(dataRegisterPage.header);

    });
    it('should register a new user ',() => {
       RegisterPage.newUserRegister();
       //expect(RegisterPage.header.getText()).eq(dataRegisterPage.headerNameUser);
    });

    after('logout',() => {
        ProfilePage.userLogout();
    });
});