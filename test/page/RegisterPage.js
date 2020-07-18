import BasePage from "./BasePage";
import {dataRegisterPage} from "../data/RegisterData";

class RegisterPage extends BasePage {

    get firstNameInput(){return $('#user_login_firstName')};
    get lastNameInput(){return $('#user_login_lastName')};
    get emailInput(){return $('#user_login_email')};
    get passwordInput(){return $('[type="password"]')};
    get selectedClick(){return $('#user_login_agreement')};
    get buttonTypeSubmit(){return $('[type="submit"]')};
    get phoneInput(){return $('#user_login_phone')};
    get submitFinishRegister(){return $('[type="submit"]')};



    newUserRegister(){
        this.firstNameInput.setValue(dataRegisterPage.FirstName);
        this.lastNameInput.setValue(dataRegisterPage.LastName);
        this.emailInput.setValue(dataRegisterPage.email);
        this.passwordInput.setValue(dataRegisterPage.password);
        this.selectedClick.click();
        this.buttonTypeSubmit.click();
        this.phoneInput.setValue(dataRegisterPage.phone);
        this.submitFinishRegister.click();
        this.verifyElementText(this.header,dataRegisterPage.headerNameUser)


    }

    open(){
        super.open('/user/register');

    }

}
export default new RegisterPage();