import BasePage from "./BasePage";

class LoginPage extends BasePage{

    get userLoginInput(){return $('#normal_login_email')};
    get userPasswordInput(){return $('#normal_login_password')};
    get loginBtn(){return $('.ant-btn.login-form-button.ant-btn-primary.ant-btn-lg')};


    userLogin(role){
        this.userLoginInput.setValue(role.email);
        this.userPasswordInput.setValue(role.password);
        this.isClickableBtn(this.loginBtn);

    }

    open(path) {
        super.open('user/login');
    }
}
export default new LoginPage();