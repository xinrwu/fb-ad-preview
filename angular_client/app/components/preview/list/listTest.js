describe('component: previewList', function () {
    var $controller;
    var PreviewClient;
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

    beforeEach(module('preview.list'));
    beforeEach(inject(function (_$controller_, _PreviewClient_) {
        $controller = _$controller_;
        PreviewClient = _PreviewClient_;
    }));

    it('should call `displayPreview` when want to display preview', function () {
        var $scope = {PreviewClient: PreviewClient};
        var displayPreviewSpy = jasmine.createSpy('displayPreview');
        var bindings = {
            preview: {},
            displayPreview: displayPreviewSpy
        };
        var ctrl = $controller('PreviewListController', {$scope: $scope}, bindings);
        ctrl.onDisplay();
        expect(displayPreviewSpy).toHaveBeenCalledWith({});
    });
});

it('should ', function () {

});