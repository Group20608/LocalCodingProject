import BasePage from "./BasePage";
import {dataRegisterPage} from "../data/RegisterData";

class RegisterPage extends BasePage {

    get headerRegister(){return $('h1')};
    get firstNameInput(){return $('#user_login_firstName')};
    get lastNameInput(){return $('#user_login_lastName')};
    get emailInput(){return $('#user_login_email')};
    get passwordInput(){return $('[type="password"]')};
    get selectedClick(){return $('#user_login_agreement')};
    get buttonTypeSubmit(){return $('[type="submit"]')};
    get headerRegisterStepTwo(){return $('.text-center.mb-lg-5')};



    newUserRegister(){
        this.firstNameInput.setValue(dataRegisterPage.FirstName);
        this.lastNameInput.setValue(dataRegisterPage.LastName);
        this.emailInput.setValue(dataRegisterPage.email);
        this.passwordInput.setValue(dataRegisterPage.password);
        this.selectedClick.click();
        this.buttonTypeSubmit.click();
        this.verifyElementIsDisplayed(this.headerRegisterStepTwo);
    }

    open(){
        super.open('/user/register');

    }

}
export default new RegisterPage();