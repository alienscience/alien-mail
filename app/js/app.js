'use strict';


// Declare app level module which depends on filters, and services
angular.module('alienMail', ['myApp.filters', 'alienMail.services', 'myApp.directives', 'alienMail.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/vertical', {templateUrl: 'partials/vertical.html', controller: 'Vertical'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/vertical'});
  }]);
