'use strict';

angular.module('angularTeamlistApp')
  .factory('filterService', [function () {
    return {
      activeFilters: {},
      searchText: ''
    };
  }]);
