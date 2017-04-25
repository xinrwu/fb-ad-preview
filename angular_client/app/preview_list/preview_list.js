'use strict';

angular.module('previewApp.preview_list', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/preview_list', {
    templateUrl: 'preview_list/preview_list.html',
    controller: 'PreviewListController'
  });
}])

.controller('PreviewListController', ['$scope', 'PreviewList', function($scope, PreviewList) {
    // getting previews
    var data = PreviewList.query();
    $scope.previews = data;
}]);
