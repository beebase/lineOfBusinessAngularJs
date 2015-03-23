(function () {
  'use strict';
  var app = angular.module('productManagement',
    ['common.services',
     'productResourceMock',
     'ui.router']);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url        : '/',
        templateUrl: 'app/welcomeView.html'
      })
      .state('productList', {
        url        : '/products',
        templateUrl: 'app/products/productListView.html',
        controller : 'ProductListCtrl as vm'
      })
      .state('productEdit', {
        url        : 'app/products/edit/:productId',
        templateUrl: 'app/products/productEditView.html',
        controller : 'ProductEditCtrl as vm'
      });
    $urlRouterProvider.otherwise("/");

  });
}());