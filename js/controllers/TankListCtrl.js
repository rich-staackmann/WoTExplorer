angular.module('wotExplorer').
controller('TankListCtrl', ['TankListService', '$scope', '$location', function TankListCtrl (tankListService, $scope, $location) {
  $scope.tanks = {};
  $scope.numTanks = 0;

  tankListService.getList().success(function (list) {
    $scope.tanks = list.data;
    $scope.numTanks = list.count;
  });

  $scope.openTankDetail = function (id) {
    $location.path('/tank/' + id);
  };
}]);
