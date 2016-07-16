app.controller('home', ['$scope', function ($scope) {
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
