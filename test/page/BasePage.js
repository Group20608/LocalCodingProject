export default class BasePage {

    verifyElementIsDisplayed(element){
        browser.waitUntil(() => element.isDisplayed());
    }

    verifyElementText(element, text){
        browser.waitUntil(() => element.getText() === text);
    }



    open(path) {
        browser.url(path)
    }
}