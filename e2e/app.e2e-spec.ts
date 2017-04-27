import { MisysAngular2DemoPage } from './app.po';

describe('misys-angular2-demo App', () => {
  let page: MisysAngular2DemoPage;

  beforeEach(() => {
    page = new MisysAngular2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
