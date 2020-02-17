import { AppPage } from './app.po';
import { browser, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let imgUrl: string;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should find the list component', () => {
    page.navigateTo();
    expect(!!page.getElementList()).toBeTruthy();
  });

  it('should insert the text to the input', () => {
    const elem = page.getElementTagInput();
    const str = 'cat';
    elem.sendKeys(str);

    browser.wait(elem.sendKeys(protractor.Key.ENTER));

    browser.wait(page.getElementByClassName('tag label label-info'))
      .then((value => {
        expect(value.getText()).toEqual(str);
      }));
    browser.sleep(500);
  });

  it('should has active class pagination button 1 before change', () => {
    browser.wait(page.getElementsByClassName('page-item'))
      .then((value) => {
        expect(page.hasClass(value[2], 'active')).toBe(true);
      });
    browser.sleep(500);
  });

  it('should exist link on the image', () => {
    browser.wait(page.getElementByClassName('img-fluid image'))
      .then((value) => {
        value.getAttribute('src')
          .then((value1 => {
            imgUrl = value1;
            expect(!!imgUrl).toBe(true);
          } ));
      });
    browser.sleep(500);
  });


  it('should click to the pagination', () => {
    browser.wait(page.getElementsByClassName('page-link'))
      .then((value) => {
        value[3].click();
      });
    browser.sleep(500);
  });

  it('should has active class pagination button 2 after change', () => {
    browser.wait(page.getElementsByClassName('page-item'))
      .then((value) => {
        expect(page.hasClass(value[3], 'active')).toBe(true);
      });
    browser.sleep(500);
  });

  it('should not equal existing image link and find link', () => {
    browser.wait(page.getElementByClassName('img-fluid image'))
      .then((value) => {
        value.getAttribute('src')
          .then((value1 => {
            expect(imgUrl).not.toEqual(value1);
          } ));
      });
    browser.sleep(500);
  });

});
