var app = angular.module('myApp', ['ui.router', 'ngDropdowns', 'headroom', 'nvd3ChartDirectives']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/homeView.html'
        })
        .state('charts', {
            url: '/charts',
            controller: 'ChartsController',
            templateUrl: 'views/chartsView.html'
        })
        .state('userToggle', {
            url: '/userToggle',
            controller: 'userToggleController',
            templateUrl: 'views/userToggleView.html'
        })
        .state('lorem', {
            url: '/lorem',
            templateUrl: 'views/loremView.html'
        })
        .state('details', {
            url: '/details/:name',
            controller: 'DetailsController',
            templateUrl: 'views/detailsView.html'
        });
    $urlRouterProvider.otherwise('/');
});
