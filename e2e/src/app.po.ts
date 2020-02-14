import { browser, by, element, ElementFinder, WebElement, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getElementList(): WebElementPromise {
    return element(by.tagName('app-list-images')).getWebElement() as WebElementPromise;
  }

  getElementTagInput(): ElementFinder {
    return element(by.className('tag-input'));
  }

  getElementByClassName(className: string): WebElementPromise {
    return element(by.className(className)).getWebElement() as WebElementPromise;
  }

  getElementsByClassName(className: string): Promise<WebElement[]> {
    return element.all(by.className(className)).getWebElements() as Promise<WebElement[]>;
  }

  hasClass(elem, cls): boolean {
    return elem.getAttribute('class').then( (classes) => {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  }
}
