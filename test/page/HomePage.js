import BasePage from "./BasePage";

class HomePage extends BasePage{
  

  open() {
    super.open('/');
  }
}

export default new HomePage();