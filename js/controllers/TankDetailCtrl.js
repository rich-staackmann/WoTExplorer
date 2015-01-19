angular.module('wotExplorer').
controller('TankDetailCtrl', ['$scope', 'TankDetailService', '$routeParams', function TankDetailCtrl ($scope, tankDetailService, $routeParams) {
  $scope.tank = {};
  var id = $routeParams.id;

  tankDetailService.getDetail(id).success(function (tankData) {
    $scope.tank = tankData.data[id];
  });
}]);
