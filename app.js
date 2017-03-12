(function(){
'use strict';

angular.module('fossegrimen', [])
.controller('SpeechInputController', SpeechInputController)


function SpeechInputController ($scope, $filter){
    $scope.isActive = false;
  
    $scope.toggleActive = function() {
    $scope.isActive = !$scope.isActive;
  };
}
})();