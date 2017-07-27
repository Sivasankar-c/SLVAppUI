import { SLVHotelAppPage } from './app.po';

describe('slvhotel-app App', () => {
  let page: SLVHotelAppPage;

  beforeEach(() => {
    page = new SLVHotelAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
