import {expect} from 'chai';
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import ProfilePage from "../page/ProfilePage";
import {newUser} from "../data/RegisterData";



describe('USER REGISTER', () => {
    before(() => {
        RegisterPage.open();
    });
    it('should go to the page Register ',() => {
        expect(RegisterPage.header.getText()).eq(newUser.header);

    });
    it('should register a new user ',() => {
       RegisterPage.newUserRegister();
       //expect(RegisterPage.header.getText()).eq(newUser.headerNameUser);
    });

    after('logout',() => {
        ProfilePage.userLogout();
    });
});

describe('NEW USER LOGIN', () => {
    it('should new user login ', () => {
        LoginPage.userLogin(newUser);
    });

    after('logout',() => {
        ProfilePage.userLogout();
    });
});