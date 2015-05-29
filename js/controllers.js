'use strict';

/* Controllers */

var fackerControllers = angular.module('fackerControllers', []);

fackerControllers.controller('SubmitsListCtrl1', function($scope) {
    $scope.submits = [
    {'id' : '1',
     'title': 'wuau',
     'submit_type' : 'new',
     'url': 'www.google.com'},
    {'id' : '1',
     'title': 'test',
     'submit_type' : 'question'}
  ];
    $scope.submit_type = 'new';
});

fackerControllers.controller('SubmitsListCtrl', function($scope, $http) {
     $http.get('http://facker-news.herokuapp.com/submits.json').
        success(function(data) {
            $scope.submits = data;
        })
    $scope.submit_type = 'new';
});

fackerControllers.controller('SubmitsDetailsCtrl', function($scope, $http, $routeParams) {
    $http.get('http://facker-news.herokuapp.com/submits/'+$routeParams.submitId+'.json').
        success(function(data) {
            $scope.submit = data;
        })
  });
