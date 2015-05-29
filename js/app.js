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
      when('/submits/:submitId', {
        templateUrl: 'partials/submits-detail.html',
        controller: 'SubmitsDetailsCtrl'
      }).
      when('/submits/upvote/:submitId', {
        templateUrl: 'partials/submits-list.html',
        controller: 'SubmitsUpvoteCtrl'
      }).
      otherwise({
        redirectTo: '/submits'
      });
  }]);
