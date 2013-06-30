'use strict';

/* Controllers */

angular.module('alienMail.controllers', []).
  // ------- Vertical index view
  controller('Vertical', ['$scope', 'Messages', function($scope, Messages) {

      // Function that selects a message when a summary is clicked
      $scope.selectMessage = function(summary) {
          if ($scope.selected) {
              $scope.selected.unread = 0;
          }
          $scope.compose = false;
          $scope.selected = summary;
          $scope.message = Messages.get({messageId: 'message' + summary.id});
      }

      // Function that composes a message when the reply button is clicked
      $scope.composeReply = function(message) {
          $scope.compose = true;
      }

      // On controller startup - get the summaries from the server
      $scope.summaries = Messages.query(function(summaries){
          // Select the first message
          $scope.selectMessage(summaries[0]);
      });

  }])
  // ------- Compose message
    .controller('Compose', ['$scope', function($scope) {

  }]);
