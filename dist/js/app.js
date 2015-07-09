var app = angular.module('myApp', ['ui.router', 'ngDropdowns', 'headroom']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/homeView.html'
        })
        .state('details', {
            url: '/details/:name',
            controller: 'DetailsController',
            templateUrl: 'views/detailsView.html'
        });
    $urlRouterProvider.otherwise('/');
});
