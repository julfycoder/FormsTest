import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPressMeButtonText() {
    return element(by.css('app-root button#press-me-button')).getText();
  }

  getPressMeButton() {
    return element(by.css('app-root button#press-me-button'));
  }

  getIncrementButton() {
    return element(by.css('app-root button#increment-button'));
  }

  getDecrementButton() {
    return element(by.css('app-root button#decrement-button'));
  }

  getSpanValue() {
    return element(by.css('app-root span#counter-span')).getText();
  }
}
