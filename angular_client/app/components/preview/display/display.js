'use strict';

var app = angular.module('preview.display', []);

app.component('previewDisplay', {
    templateUrl: 'components/preview/display/display.html',
    controller: 'PreviewDisplayController'
});

app.controller('PreviewDisplayController', ['$scope', function ($scope) {
    // getting previews
    $scope.$on('display-preview', function(event, preview) {
        $scope.preview = preview;
        $scope.show = true;
    });
}]);