'use strict';


// Declare app level module which depends on filters, and services
angular.module('reveaLA', [
  'ngRoute',
  'reveaLA.filters',
  'reveaLA.services',
  'reveaLA.directives',
  'reveaLA.controllers',
  'mm.foundation'
]).

config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to start modal
  $urlRouterProvider.otherwise("/start")
})