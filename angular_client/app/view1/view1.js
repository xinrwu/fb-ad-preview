'use strict';

angular.module('previewApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'PreviewFormController'
  });
}])

.controller('PreviewFormController', [function() {
  
}]);