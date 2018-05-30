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
        name: 'creativity-entrepreneurship',
        url: '/creativity-entrepreneurship',
        templateUrl: 'views/creativity-entrepreneurship.html'
      }
    )
    .state(
      {
        name: 'cultural-heritage',
        url: '/cultural-heritage',
        templateUrl: 'views/cultural-heritage.html'
      }
    )
    .state(
      {
        name: 'imagination',
        url: '/imagination',
        templateUrl: 'views/imagination.html'
      }
    )
    .state(
      {
        name: 'inspiring-spaces',
        url: '/inspiring-spaces',
        templateUrl: 'views/inspiring-spaces.html'
      }
    )
    .state(
      {
        name: 'research-excellence',
        url: '/research-excellence',
        templateUrl: 'views/research-excellence.html'
      }
    )
    .state(
      {
        name: 'student-success',
        url: '/student-success',
        templateUrl: 'views/student-success.html'
      }
    );

    $locationProvider.html5Mode(true);
});