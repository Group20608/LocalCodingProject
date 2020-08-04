import {userAdmin} from "../data/UserLoginData";
import LoginPage from "../page/LoginPage"
import ProfilePage from "../page/ProfilePage";
import axios from "axios";


describe('NEW USER LOGIN', () => {
    before('open page',  () => {
        LoginPage.open();

    })
    it('should user login', () => {
        LoginPage.userLogin(userAdmin);
    })

    it('should API user login', async() => {
        const login = await axios({
            method: 'post',
            url: `https://server-stage.pasv.us/user/login`,
            email : 'gmbh1@ro.ru',
            password : '123456',
        })
            .then(res => res)
            .catch(err => err);
        //expect().eq('');
        console.log(login);
    })

    // after('logout', () => {
    //     ProfilePage.userLogout();
    // });
});