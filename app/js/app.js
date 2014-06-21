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
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'ModalDemoCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'ModalDemoCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
