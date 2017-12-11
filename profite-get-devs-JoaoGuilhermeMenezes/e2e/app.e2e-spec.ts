import { ProfiteGetDevsPage } from './app.po';

describe('profite-get-devs App', () => {
  let page: ProfiteGetDevsPage;

  beforeEach(() => {
    page = new ProfiteGetDevsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
