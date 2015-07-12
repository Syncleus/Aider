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
        .state('details', {
            url: '/uppercase/:name',
            controller: 'uppercase',
            templateUrl: 'views/uppercase.html'
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
        .state('analyzer.datastore', {
            url: '/datastore',
            controller: 'analyzer.datastore',
            templateUrl: 'views/analyzer.datastore.html'
        })
        .state('analyzer.fitness', {
            url: '/fitness',
            controller: 'analyzer.fitness',
            templateUrl: 'views/analyzer.fitness.html'
        })
        .state('analyzer.endpoints', {
            url: '/endpoints',
            controller: 'analyzer.endpoints',
            templateUrl: 'views/analyzer.endpoints.html'
        })
        .state('analyzer.discoveries', {
            url: '/discoveries',
            controller: 'analyzer.discoveries',
            templateUrl: 'views/analyzer.discoveries.html'
        })
        .state('analyzer.insights', {
            url: '/insights',
            controller: 'analyzer.insights',
            templateUrl: 'views/analyzer.insights.html'
        })
        .state('analyzer.traffic', {
            url: '/traffic',
            controller: 'analyzer.traffic',
            templateUrl: 'views/analyzer.traffic.html'
        })
        .state('analyzer.statistics', {
            url: '/statistics',
            controller: 'analyzer.statistics',
            templateUrl: 'views/analyzer.statistics.html'
        })
        .state('analyzer.configure', {
            url: '/configure',
            controller: 'analyzer.configure',
            templateUrl: 'views/analyzer.configure.html'
        });
    $urlRouterProvider.otherwise('/');
});
