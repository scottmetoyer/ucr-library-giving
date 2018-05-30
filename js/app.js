var myApp = angular.module('app', ['ui.router']);

myApp.config(function ($stateProvider,  $locationProvider) {
  $stateProvider
    .state(
      {
        name: 'home',
        url: '/',
        templateUrl: 'views/home.html'
      }
    )
    .state(
      {
        name: 'about',
        url: '/about',
        templateUrl: 'views/about.html'
      }
    )
    .state(
      {
        name: 'blog',
        url: '/blog',
        templateUrl: 'views/blog.html'
      }
    )
    .state(
      {
        name: 'contact',
        url: '/contact',
        templateUrl: 'views/contact.html'
      }
    );

    $locationProvider.html5Mode(true);
});