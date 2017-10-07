(function () {
  'use restrict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'js/menuapp/items.template.html',
      binding: {
          itemsList: '<'
        }
    });;
})()
