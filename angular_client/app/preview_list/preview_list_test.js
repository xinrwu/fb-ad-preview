'use strict';

describe('PreviewList', function () {
  var $httpBackend;
  var PreviewList;
  var previewData = [{
      'business_name': 'Bell',
      'text': 'Looking for a new internet provider?',
      'image': '001.jpg',
      'description': 'Fastest internet provider!',
      'url': 'https://www.bell.ca',
      'call_to_action': 'try here!'
    },
    {
      'business_name': 'Bell2',
      'text': 'Looking for a new internet provider?',
      'image': '001.jpg',
      'description': 'Fastest internet provider!',
      'url': 'https://www.bell.ca',
      'call_to_action': 'click here!'
    }
  ];

  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('previewApp.preview_list'));

  // mocking the api
  beforeEach(inject(function (_$httpBackend_, _PreviewList_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://127.0.0.1:8000/previews').respond(previewData);
    PreviewList = _PreviewList_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch previews data from `http://127.0.0.1:8000/previews`', function () {
    var previewList = PreviewList.query();
    expect(previewList).toEqual([]);
    $httpBackend.flush();
    expect(previewList).toEqual(previewData);
  });
});