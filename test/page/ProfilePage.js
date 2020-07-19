import BasePage from "./BasePage";
import {userLogin} from "../data/UserLoginData";

class ProfilePage extends BasePage{

  get dropDownUserMenu(){return $('.ant-dropdown-link.ant-dropdown-trigger')}
  get logout(){return $$('li[role="menuitem"]')[2]}


  userLogout(){
    this.dropDownUserMenu.click();
    this.logout.click();
    this.verifyElementText(this.header, userLogin.headerText);
  }
}

export default new ProfilePage();