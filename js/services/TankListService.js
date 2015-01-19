angular.module('wotExplorer').
service('TankListService', [ 'apiConfig', '$http', function TankListService (apiConfig, $http) {
  return {
    getList: function getList() {
      return $http.get(apiConfig.url + 'encyclopedia/tanks/', { params: {application_id: apiConfig.apiKey}});
    }
  };
}]);
