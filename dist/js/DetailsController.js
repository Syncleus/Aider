app.controller('DetailsController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.name = $routeParams.name;
}]);
