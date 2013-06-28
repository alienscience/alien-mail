'use strict';

/* Controllers */

angular.module('alienMail.controllers', []).
  controller('Vertical', ['$scope', 'Summaries', function($scope, Summaries) {
      // Get the summaries from the server
      $scope.summaries = Summaries.query();

      // Function that selects a message when a summary is clicked
      $scope.selectMessage = function(summary) {
          $scope.selectedMessage = summary.id;
      }
  }])
  .controller('MyCtrl2', [function() {

  }]);
