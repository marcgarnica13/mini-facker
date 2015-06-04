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

        $http.get('http://facker-news.herokuapp.com/users.json').
            success(function(data) {
                $scope.users = data;
            })

        $scope.upvote = function(submit) {
            $http.get('http://facker-news.herokuapp.com/submits/upvote/'+submit.id+'.json').
                success(function(data) {
                    submit.score += 1;
                })
        };
});

fackerControllers.controller('NewSubmitCtrl',
    function($scope, $http) {
       $scope.message = "Fill the form";
       $scope.addSubmit = function() {
                $http.post('http://facker-news.herokuapp.com/submits.json', {title: $scope.title, url: $scope.url, submit_type: "new", user_id : "1"}).
                success(function(data) {
                    $scope.message = "Added correctly";
                })
        };        
});


fackerControllers.controller('NewQuestionCtrl',
    function($scope, $http) {
       $scope.message = "Fill the form";
       $scope.addSubmit = function() {
                $http.post('http://facker-news.herokuapp.com/submits.json', {title: $scope.title, submit_type: "question", user_id : "1"}).
                success(function(data) {
                    $scope.message = "Added correctly";
                })
        };        
});

fackerControllers.controller('NewCommentsCtrl',
    function($scope, $http, $routeParams) {
       $scope.message = "Fill the form";
       $scope.addSubmit = function() {
                $http.post('http://facker-news.herokuapp.com/comments.json', {content: $scope.content, submit_id: $routeParams.submitId, user_id : "1"}).
                success(function(data) {
                    $scope.message = "Added correctly";
                })
        };        
});

fackerControllers.controller('NewReplyCtrl',
    function($scope, $http, $routeParams) {
       $scope.message = "Fill the form";
       $scope.addSubmit = function() {
                $http.post('http://facker-news.herokuapp.com/comments.json', {content: $scope.content, submit_id: $routeParams.submitId, parent_id : $routeParams.commentId, user_id : "1"}).
                success(function(data) {
                    $scope.message = "Added correctly";
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

    $http.get('http://facker-news.herokuapp.com/users.json').
            success(function(data) {
                $scope.users = data;
            })
  });

fackerControllers.controller('CommentsDetailsCtrl', function($scope, $http, $routeParams) {
    $http.get('http://facker-news.herokuapp.com/comments/'+$routeParams.commentId+'.json').
        success(function(data) {
            $scope.comment = data;
        })

    $http.get('http://facker-news.herokuapp.com/comments.json?parent_id='+$routeParams.commentId).
        success(function(data) {
            $scope.replies = data;
            })

    $http.get('http://facker-news.herokuapp.com/users.json').
            success(function(data) {
                $scope.users = data;
            })
  });
