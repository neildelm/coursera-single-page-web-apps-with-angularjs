(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiPath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'ApiPath'];

  function MenuDataService($http, apiPath) {

    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: apiPath + '/categories.json'
      }).then(function (response) {
        return response.data;
      });
    }

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: apiPath + '/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function (response) {
        return response.data;
      });
    }

  }

})()
