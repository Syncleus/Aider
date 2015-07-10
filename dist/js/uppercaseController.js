app.controller('uppercaseController', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.name = $stateParams.name;
}]);
