import { LeafletNgCliStarterPage } from './app.po';

describe('leaflet-ng-cli-starter App', () => {
  let page: LeafletNgCliStarterPage;

  beforeEach(() => {
    page = new LeafletNgCliStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
