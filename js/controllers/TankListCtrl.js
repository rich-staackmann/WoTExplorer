angular.module('wotExplorer').
controller('TankListCtrl', ['TankListService', '$scope', '$location', '$cacheFactory', function TankListCtrl (tankListService, $scope, $location, $cacheFactory) {
  $scope.tanks = {};
  $scope.numTanks = 0;

  if ($cacheFactory.get('TankList')) {
    $scope.tanks = $cacheFactory.get('TankList').get('tanks');
    $scope.numTanks = $cacheFactory.get('TankList').get('numTanks');
  } else {
    var cache = $cacheFactory('TankList');
    tankListService.getList().success(function (list) {
      $scope.tanks = list.data;
      $scope.numTanks = list.count;
      cache.put("tanks", list.data);
      cache.put("numTanks", list.count);
    });
  }

  $scope.openTankDetail = function (id) {
    $location.path('/tank/' + id);
  };
}]);
