'use strict';

/* Controllers */

angular.module('alienMail.controllers', []).
  // ------- Vertical index view
  controller('Vertical', ['$scope','Messages', function($scope, Messages) {

      // Selects a message when a summary is clicked
      $scope.selectMessage = function(summary) {
          if ($scope.compose) {
              $scope.saveDraft();
              $scope.compose = false;
          }
          $scope.selected = summary;
          $scope.selected.unread = 0;
          $scope.message = Messages.get({messageId: 'message' + summary.id});
      }

      // Composes a message when the reply button is clicked
      $scope.composeReply = function(message) {
          $scope.compose = true;
      }

      // Composes a reply to all message
      $scope.composeReplyAll = function(message) {
          $scope.compose = true;
      }

      // Compose a message forward
      $scope.composeForward = function(message) {
          $scope.compose = true;
      }

      // Move a message
      $scope.moveMessage = function(message) {
          if ($scope.move) {
              $scope.moveButtonText = "Move to";
          } else {
              $scope.moveButtonText = "Cancel";
          }
          $scope.move = !$scope.move;
      }
      
      // Sends a message
      $scope.send = function() {
          // TODO: post message
          $scope.compose = false;
      }
      
      // Cancels a compose
      $scope.cancelCompose = function() {
          $scope.saveDraft();
          $scope.compose = false;
      }
      
      // Saves a draft
      $scope.saveDraft = function() {
          // TODO: post draft
      }
      
      // Handles keypresses in the compose mail editable div
      angular.element(".email-content-body").keydown(function(event) {
          if (event.keyCode == 9) {
              event.preventDefault();
              document.execCommand('indent',true,null);
          }
      });
                          
      // Set initial behaviour
      $scope.moveButtonText = "Move to";

      // On controller startup - get the summaries from the server
      $scope.summaries = Messages.query(function(summaries){
          // Select the first message
          $scope.selectMessage(summaries[0]);
      });

  }]);


