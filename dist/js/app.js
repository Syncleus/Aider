var app = angular.module('myApp', ['ui.router', 'ngDropdowns', 'headroom', 'nvd3ChartDirectives']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeController',
            templateUrl: 'views/home.html'
        })
        .state('charts', {
            url: '/charts',
            controller: 'chartsController',
            templateUrl: 'views/charts.html'
        })
        .state('userToggle', {
            url: '/userToggle',
            controller: 'userToggleController',
            templateUrl: 'views/userToggle.html'
        })
        .state('lorem', {
            url: '/lorem',
            templateUrl: 'views/lorem.html'
        })
        .state('analyzer', {
            url: '/analyzer',
            controller: 'analyzerController',
            templateUrl: 'views/analyzer.html'
        })
        .state('analyzer.dataModel', {
            url: '/dataModel',
            controller: 'dataModelController',
            templateUrl: 'views/analyzer.dataModel.html'
        })
        .state('details', {
            url: '/uppercase/:name',
            controller: 'uppercaseController',
            templateUrl: 'views/uppercase.html'
        });
    $urlRouterProvider.otherwise('/');
});
