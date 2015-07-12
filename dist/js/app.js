var app = angular.module('myApp', ['ui.router', 'ngDropdowns', 'headroom', 'nvd3ChartDirectives']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'home',
            templateUrl: 'views/home.html'
        })
        .state('charts', {
            url: '/charts',
            controller: 'charts',
            templateUrl: 'views/charts.html'
        })
        .state('userToggle', {
            url: '/userToggle',
            controller: 'userToggle',
            templateUrl: 'views/userToggle.html'
        })
        .state('lorem', {
            url: '/lorem',
            templateUrl: 'views/lorem.html'
        })
        .state('analyzer', {
            url: '/analyzer',
            controller: 'analyzer',
            templateUrl: 'views/analyzer.html'
        })
        .state('analyzer.dataModel', {
            url: '/dataModel',
            controller: 'analyzer.dataModel',
            templateUrl: 'views/analyzer.dataModel.html'
        })
        .state('details', {
            url: '/uppercase/:name',
            controller: 'uppercase',
            templateUrl: 'views/uppercase.html'
        });
    $urlRouterProvider.otherwise('/');
});
