var app = angular.module('mainApp', ['ui.router'])
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      // // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
          url: '/',
          templateUrl: './partials/home.html'
      })
      .state('explore', {
          url: '/explore',
          templateUrl: './partials/explore.html'
      })
      .state('admin', {
          url: '/admin',
          templateUrl: './partials/admin.html'
      })
      .state('authenticate', {
          url: '/signin',
          templateUrl: './partials/authenticate.html'
      })

});
