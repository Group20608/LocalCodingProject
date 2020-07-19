import BasePage from "./BasePage";
import {newUser} from "../data/RegisterData";

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
        this.firstNameInput.setValue(newUser.FirstName);
        this.lastNameInput.setValue(newUser.LastName);
        this.emailInput.setValue(newUser.email);
        this.passwordInput.setValue(newUser.password);
        this.selectedClick.click();
        this.buttonTypeSubmit.click();
        this.phoneInput.setValue(newUser.phone);
        this.submitFinishRegister.click();
        this.verifyElementText(this.header,newUser.headerNameUser)


    }

    open(){
        super.open('/user/register');

    }

}
export default new RegisterPage();