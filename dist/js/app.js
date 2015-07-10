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
        .state('details', {
            url: '/details/:name',
            controller: 'DetailsController',
            templateUrl: 'views/detailsView.html'
        });
    $urlRouterProvider.otherwise('/');
});
//
//app.run(function ($templateCache) {
//    $templateCache.put('ngDropdowns/templates/dropdownMenu.html', [
//        '<span class="wrap-dd-select">',
//        '<span class="selected">{{dropdownModel[labelField]}}</span>',
//        '<ul class="custom-dropdown">',
//        '<li ng-repeat="item in dropdownSelect"',
//        ' class="dropdown-item"',
//        ' dropdown-select-item="item"',
//        ' dropdown-item-label="labelField">',
//        '</li>',
//        '</ul>',
//        '</span>'
//    ].join(''));
//});
