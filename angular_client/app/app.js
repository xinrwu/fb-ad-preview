'use strict';

// Declare app level module which depends on views, and components
angular.module('previewApp', [
  'ngRoute',
  'ngResource',
  'preview',
  'previewApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  //$routeProvider.otherwise({redirectTo: '/preview_form'});
}]);
