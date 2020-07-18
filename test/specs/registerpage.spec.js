import {expect} from 'chai';
import RegisterPage from "../page/RegisterPage";
import {dataRegisterPage} from "../data/RegisterData";



describe('USER REGISTER', () => {
    before(() => {
        RegisterPage.open();
    });
    it('should go to the page Register ',() => {
        expect(RegisterPage.headerRegister.getText()).eq(dataRegisterPage.header);

    });
    it('should register a new user ',() => {
       RegisterPage.newUserRegister();

    });
});