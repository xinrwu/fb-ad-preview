'use strict';

var app = angular.module('preview.list', ['ngRoute', 'ngResource']);

app.component('previewList', {
    templateUrl: 'components/preview/list/list.html',
    controller: 'PreviewListController'
});
app.controller('PreviewListController', ['$scope', 'PreviewClient', function ($scope, PreviewClient) {
    // getting previews
    $scope.previews = PreviewClient.query();
}]);