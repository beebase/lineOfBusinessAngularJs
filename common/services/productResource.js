(function () {
  'use strict';
  angular
    .module('common.services')
    .factory('productResource', productResource);

  function productResource($resource) {
    return $resource('/api/products/:productId');
  }
}());