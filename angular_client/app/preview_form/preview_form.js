'use strict';

angular.module('previewApp.preview_form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/preview_form', {
    templateUrl: 'preview_form/preview_form.html',
    controller: 'PreviewFormController'
  });
}])

.controller('PreviewFormController', [function() {
  
}]);