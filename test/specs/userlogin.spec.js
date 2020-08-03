import {userAdmin} from "../data/UserLoginData";
import LoginPage from "../page/LoginPage"
import ProfilePage from "../page/ProfilePage";


describe('NEW USER LOGIN', () => {
    before('open page',  () => {
        LoginPage.open();

    })
    it('should user login', () => {
        LoginPage.userLogin(userAdmin);
    })



    after('logout', () => {
        ProfilePage.userLogout();
    });
});