(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.myMenu = "";
  $scope.myMessage = "";

  $scope.showMessage = function () {
    var arrMenu = $scope.myMenu.split(',');

    if ($scope.myMenu.length == 0) {
      $scope.myMessage = "Please enter data first";
    }
    else {
      if (arrMenu.length <= 3) {
        $scope.myMessage = "Enjoy!";
      }
      else {
        $scope.myMessage = "Too much!";
      }
    }
  };

}

})();
