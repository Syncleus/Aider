var app = angular.module('myApp', ['ngRoute', 'ngDropdowns', 'headroom']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/homeView.html'
        })
        .when('/details/:name', {
            controller: 'DetailsController',
            templateUrl: 'views/detailsView.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
