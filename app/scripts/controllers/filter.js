'use strict';

angular.module('angularTeamlistApp')
  .controller('FilterCtrl', ['$scope', 'filterService', function ($scope, filterService) {
    $scope.filterService = filterService;
  }]);
