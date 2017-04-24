'use strict';

// Declare app level module which depends on views, and components
angular.module('previewApp', [
  'ngRoute',
  'previewApp.view1',
  'previewApp.view2',
  'previewApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
