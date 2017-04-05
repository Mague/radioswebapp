import { RadioswebappPage } from './app.po';

describe('radioswebapp App', () => {
  let page: RadioswebappPage;

  beforeEach(() => {
    page = new RadioswebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
