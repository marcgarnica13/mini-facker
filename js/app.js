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
      when('/comments/new/:submitId', {
	       templateUrl: 'partials/new-comment.html',
	       controller: 'NewCommentsCtrl'
      }).
      when('/comments/:commentId', {
         templateUrl: 'partials/comments-detail.html',
         controller: 'CommentsDetailsCtrl'
      }).
      when('/news', {
         templateUrl: 'partials/new-new.html',
         controller: 'NewSubmitCtrl'
      }).
      when('/questions', {
         templateUrl: 'partials/new-question.html',
         controller: 'NewQuestionCtrl'
      }).
      when('/comments/reply/:submitId/:commentId', {
         templateUrl: 'partials/new-reply.html',
         controller: 'NewReplyCtrl'
      }).
      otherwise({
        redirectTo: '/submits'
      });
  }]);
