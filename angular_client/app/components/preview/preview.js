'use strict';

angular.module('preview', ['preview.list', 'preview.create', 'ngResource'])
.component('preview', {
    templateUrl: 'components/preview/preview.html',
    controller: 'PreviewController'
})
.controller('PreviewController', function PreviewController() {
});