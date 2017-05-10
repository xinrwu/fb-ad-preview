'use strict';

describe('PreviewClient', function () {
  var $httpBackend;
  var PreviewClient;
  var requestHandler;
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

  beforeEach(module('preview'));

  // mocking the api
  beforeEach(inject(function (_$httpBackend_, _PreviewClient_) {
    $httpBackend = _$httpBackend_;
    requestHandler = $httpBackend.when('GET', 'http://127.0.0.1:8000/previews').respond(previewData);
    //requestHandler = $httpBackend.when('POST', 'http://127.0.0.1:8000/previews')
    //$httpBackend.expectPOST('http://127.0.0.1:8000/previews', '{}').respond(401, '');
    PreviewClient = _PreviewClient_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch previews data from `http://127.0.0.1:8000/previews`', function () {
    var previewList = PreviewClient.query();
    expect(previewList).toEqual([]);
    $httpBackend.flush();
    expect(previewList).toEqual(previewData);
  });
/*
  it('should fail POST', function() {
    var saved = PreviewClient.save({});
    $httpBackend.flush();
    expect(saved.status).toBe('401');
  })
*/
});