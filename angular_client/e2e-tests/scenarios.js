'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /preview_form when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/preview_form");
  });


  describe('preview_form', function() {

    beforeEach(function() {
      browser.get('index.html#!/preview_form');
    });


    it('should render preview form when user navigates to /preview_form', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for preview form/);
    });

  });


  describe('preview_list', function() {

    beforeEach(function() {
      browser.get('index.html#!/preview_list');
    });


    it('should render view2 when user navigates to /preview_list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for preview list/);
    });

  });
});
