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

fackerControllers.controller('SubmitsListCtrl',
    function($scope, $http) {
        $http.get('http://facker-news.herokuapp.com/submits.json').
            success(function(data) {
                $scope.submits = data;
            })
        $scope.submit_type = 'new';

        $scope.upvote = function(submit) {
            $http.get('http://facker-news.herokuapp.com/submits/upvote/'+submit.id+'.json').
                success(function(data) {
                    submit.score += 1;
                })
        };
});

fackerControllers.controller('SubmitsDetailsCtrl', function($scope, $http, $routeParams) {
    $http.get('http://facker-news.herokuapp.com/submits/'+$routeParams.submitId+'.json').
        success(function(data) {
            $scope.submit = data;
        })

    $http.get('http://facker-news.herokuapp.com/comments.json?submit_id='+$routeParams.submitId).
        success(function(data) {
            $scope.comments = data;
            })
  });

fackerControllers.controller('NewCommentsCtrl',
    function($scope, $http, $routeParams) {
	$scope.comment = function(submit, comment){
			console.log('crido la funcio');
			$http.get('http://facker-news.herokuapp.com/submits/upvote/'+submit.id+'.json').
                success(function(data) {
                    submit.score += 1;
                })
	};
});
