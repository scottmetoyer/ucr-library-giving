var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize']);

app.config(function ($stateProvider, $locationProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state({
      name: 'creativity-entrepreneurship',
      url: '/creativity-entrepreneurship',
      templateUrl: 'views/creativity-entrepreneurship.html'
    })
    .state({
      name: 'cultural-heritage',
      url: '/cultural-heritage',
      templateUrl: 'views/cultural-heritage.html'
    })
    .state({
      name: 'imagination',
      url: '/imagination',
      templateUrl: 'views/imagination.html'
    })
    .state({
      name: 'inspiring-spaces',
      url: '/inspiring-spaces',
      templateUrl: 'views/inspiring-spaces.html'
    })
    .state({
      name: 'research-excellence',
      url: '/research-excellence',
      templateUrl: 'views/research-excellence.html'
    })
    .state({
      name: 'student-success',
      url: '/student-success',
      templateUrl: 'views/student-success.html'
    });

  $locationProvider.html5Mode(true);
});

app.run(function ($transitions) {
  $transitions.onSuccess({}, function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});

app.controller('MainController', ['$scope', '$location', function ($scope, $location) {
  $scope.go = function (path) {
    $location.path(path);
  };
}]);

app.directive('card', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/card.html',
    scope: {
      image: '@',
      alt: '@',
      title: '@',
      text: '@',
      link: '@'
    },
    replace: true
  };
});

app.directive('flip', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/flip.html',
    transclude: {
      front: 'cardFlipFront',
      back: 'cardFlipBack'
    },
    scope: {
      flipped: '=',
      flipAlong: '@'
    }
  };
});