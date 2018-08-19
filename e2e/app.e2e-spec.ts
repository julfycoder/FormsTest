import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('button should display "Press me"', () => {
    page.navigateTo();
    expect(page.getPressMeButtonText()).toEqual('Press me');
  });

  it('increment button clicks 4 times, the value of counter should be 4', () => {
    page.navigateTo();

    expect(page.getSpanValue()).toBe('0');

    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();

    expect(page.getSpanValue()).toBe('4');
  });

  it('decrement button clicks 4 times, the value of counter should be 0', () => {
    page.navigateTo();

    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();

    expect(page.getSpanValue()).toBe('4');

    page.getDecrementButton().click();
    page.getDecrementButton().click();
    page.getDecrementButton().click();
    page.getDecrementButton().click();

    expect(page.getSpanValue()).toBe('0');
  });
});
