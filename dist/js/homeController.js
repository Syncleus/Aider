app.controller('homeController', ['$scope', function ($scope) {
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
