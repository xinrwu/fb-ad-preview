'use strict';

angular.module('preview.create', ['ngResource'])

  .component('previewForm', {
    templateUrl: 'components/preview/create/create.html',
    controller: 'PreviewFormController'
  })

  .controller('PreviewFormController', ['$route', '$scope', 'PreviewClient', function ($route, $scope, PreviewClient) {
    $scope.addPreview = function () {
      // add preview to API
      PreviewClient.save($scope.new_preview, function (data) {
        location.reload();
      }, function (error) {
        alert('contains an invalid parameter');
      });
    }
  }]);