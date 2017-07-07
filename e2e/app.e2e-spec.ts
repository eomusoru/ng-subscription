import { FormsAssignmentPage } from './app.po';

describe('forms-assignment App', () => {
  let page: FormsAssignmentPage;

  beforeEach(() => {
    page = new FormsAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
