import BasePage from "./BasePage";
import {userLogin} from "../data/UserLoginData";

class ProfilePage extends BasePage{

  get dropDownUserMenu(){return $('[aria-label="down"]')}
  get logout(){return $('[data-qa="logout"]')}


  userLogout(){
    this.dropDownUserMenu.click();
    this.logout.click();
    this.verifyElementText(this.header, userLogin.headerText);
  }
}

export default new ProfilePage();