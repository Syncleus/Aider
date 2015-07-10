app.controller('homeController', ['$scope', 'user', function ($scope, user) {
    $scope.people = [
        {
            text: 'Jeffrey',
            href: "#/details/Jeffrey"
        },
        {
            text: 'Billy',
            href: "#/details/Billy"
        }
    ];
}]);
