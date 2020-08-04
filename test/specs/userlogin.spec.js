import {expect} from 'chai';
import { userAdmin } from '../data/UserLoginData';
import LoginPage from '../page/LoginPage';


describe('NEW USER LOGIN', () => {

  before('open page', () => {
    LoginPage.open();
  });

  it('should user login', () => {
    LoginPage.userLogin(userAdmin);
  });

});
