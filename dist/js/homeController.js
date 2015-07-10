app.controller('homeController', ['$scope', 'user', function ($scope, user) {
    $scope.people = [
        {
            text: 'Jeffrey',
            href: "#/uppercase/Jeffrey"
        },
        {
            text: 'Billy',
            href: "#/uppercase/Billy"
        }
    ];
}]);
