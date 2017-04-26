'use strict';

angular.module('preview', ['preview.list',
        'preview.create',
        'preview.display',
        'ngResource'
    ])
    .component('preview', {
        templateUrl: 'components/preview/preview.html',
        controller: 'PreviewController'
    })
    .controller('PreviewController', ['$rootScope', '$scope', function ($rootScope, $scope) {
            $rootScope.displayPreview = function (preview) {
                $rootScope.$broadcast('display-preview', preview);
            }
    }]);