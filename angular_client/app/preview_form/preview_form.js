'use strict';

angular.module('previewApp.preview_form', ['ngRoute', 'ngResource'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preview_form', {
      templateUrl: 'preview_form/preview_form.html',
      controller: 'PreviewFormController'
    });
  }])

  .controller('PreviewFormController', ['$scope', 'PreviewForm', function ($scope, PreviewForm) {
    $scope.addPreview = function () {
      // add preview to API
      PreviewForm.save($scope.new_preview, function (data) {
        alert('updated!');
      }, function (error) {
        alert('contains an invalid parameter');
      });
    }
  }]);