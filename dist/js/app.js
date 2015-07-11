var app = angular.module('myApp', ['ui.router', 'ngDropdowns', 'headroom', 'nvd3ChartDirectives']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeController',
            templateUrl: 'views/homeView.html'
        })
        .state('charts', {
            url: '/charts',
            controller: 'chartsController',
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
        .state('dataModel', {
            url: '/dataModel',
            controller: 'dataModelController',
            templateUrl: 'views/dataModelView.html'
        })
        .state('details', {
            url: '/uppercase/:name',
            controller: 'uppercaseController',
            templateUrl: 'views/uppercaseView.html'
        });
    $urlRouterProvider.otherwise('/');
});
