import { GotoExamPage } from './app.po';

describe('goto-exam App', function() {
  let page: GotoExamPage;

  beforeEach(() => {
    page = new GotoExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
