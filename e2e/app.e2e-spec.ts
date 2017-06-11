import { KirkhadisV1Page } from './app.po';

describe('kirkhadis-v1 App', function() {
  let page: KirkhadisV1Page;

  beforeEach(() => {
    page = new KirkhadisV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
