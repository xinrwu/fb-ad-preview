'use strict';

angular.module('previewApp.preview_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/preview_list', {
    templateUrl: 'preview_list/preview_list.html',
    controller: 'PreviewListController'
  });
}])

.controller('PreviewListController', [function() {

}]);