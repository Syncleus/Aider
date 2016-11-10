import { AiderPage } from './app.po';

describe('aider App', function() {
  let page: AiderPage;

  beforeEach(() => {
    page = new AiderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
