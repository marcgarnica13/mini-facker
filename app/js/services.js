'use strict';

/* Services */

var fackerServices = angular.module('fackerServices', ['ngResource']);

fackerServices.factory('Submit', ['$resource',
  function($resource){
    return $resource('submits/:submitId.json', {}, {
      query: {method:'GET', params:{submitId:'submits'}, isArray:true}
    });
  }]);
