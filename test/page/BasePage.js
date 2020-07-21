export default class BasePage {

    get header(){return $('h1')};

    verifyElementIsDisplayed(element){
        browser.waitUntil(() => element.isDisplayed());
    }

    verifyElementText(element, text){
        browser.waitUntil(() => element.getText() === text);
    }

    isClickableBtn(element){
        browser.waitUntil(() => element.isClickable())
        element.click();
    }

    verifyTitle(title){
        this.open();
        browser.waitUntil(() => browser.getTitle() === title );
    }

    open(path) {
        browser.url(path)
    }
}