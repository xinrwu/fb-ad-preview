'use strict';

// Declare app level module which depends on views, and components
angular.module('previewApp', [
  'ngRoute',
  'previewApp.preview_form',
  'previewApp.preview_list',
  'previewApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/preview_form'});
}]);
