(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'js/menuapp/categories.template.html',
      binding: {
        categoriesList: '<'
      }
    });
})()
