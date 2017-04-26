'use strict';

var app = angular.module('preview.list', ['ngRoute', 'ngResource']);

app.component('previewList', {
    require: {
        previewCtrl: '^preview'
    },
    templateUrl: 'components/preview/list/list.html',
    controller: 'PreviewListController'
});
app.controller('PreviewListController', ['$rootScope', '$scope', 'PreviewClient', function ($rootScope, $scope, PreviewClient) {
    // getting previews
    $scope.previews = PreviewClient.query();
    // get saved preview displayed
    $scope.onDisplay = function(preview) {
        $rootScope.displayPreview(preview);
    }
    
}]);