'use strict';

/* Controllers */

angular.module('alienMail.controllers', []).
  // ------- Vertical index view
  controller('Vertical', ['$scope','Messages', function($scope, Messages) {

      // Function that selects a message when a summary is clicked
      $scope.selectMessage = function(summary) {
          $scope.compose = false;
          $scope.selected = summary;
          $scope.selected.unread = 0;
          $scope.message = Messages.get({messageId: 'message' + summary.id});
      }

      // Function that composes a message when the reply button is clicked
      $scope.composeReply = function(message) {
          $scope.compose = true;
          editor = $('#email-editor');
          $('#email-editor').keydown(function(e){
              if (e.keyCode == 9) {
                  e.preventDefault();
              }
          });
      }

      // Function that handles keypresses in the compose mail editable div
      angular.element(".email-content-body").keydown(function(event) {
          if (event.keyCode == 9) {
              event.preventDefault();
              document.execCommand('indent',true,null);
          }
      });
                                                     
      // On controller startup - get the summaries from the server
      $scope.summaries = Messages.query(function(summaries){
          // Select the first message
          $scope.selectMessage(summaries[0]);
      });

  }])
  // ------- Compose message
    .controller('Compose', ['$scope', function($scope) {

  }]);
