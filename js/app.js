var wot = angular.module('wotExplorer', ['ngRoute']);
wot.constant('apiConfig',
  {
    url: 'http://api.worldoftanks.com/wot/',
    apiKey: 'a086522a1b5bab7c0147956c7b409e39',
    appName: 'MyWoTApp',
    language: 'en'
  }
);
wot.config(function ( $routeProvider ) {
  'use strict';
  $routeProvider
  .when('/', {
    templateUrl: 'views/tankList.html',
    controller: 'TankListCtrl'
  })
  .when('/tank/:id', {
    templateUrl: 'views/tankDetail.html',
    controller: 'TankDetailCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
