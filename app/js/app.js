'use strict';

/* App Module */

var fackerApp = angular.module('fackerApp', [
  'ngRoute',

  'fackerControllers',
  'fackerFilters',
  'fackerServices'
]);


fackerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/submits', {
        templateUrl: 'partials/submits-list.html',
        controller: 'SubmitsListCtrl'
      }).
      when('/submits/:submitid', {
        templateUrl: 'partials/submits-detail.html',
        controller: 'SubmitsDetailsCtrl'
      }).
      otherwise({
        redirectTo: '/submits'
      });
  }]);
