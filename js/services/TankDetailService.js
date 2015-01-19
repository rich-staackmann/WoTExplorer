angular.module('wotExplorer').
service('TankDetailService', [ 'apiConfig', '$http', function TankDetailService (apiConfig, $http) {
  return {
    getDetail: function getDetail(id) {
      return $http.get(apiConfig.url + 'encyclopedia/tankinfo/', { params: {application_id: apiConfig.apiKey, tank_id: id}});
    }
  };
}]);
