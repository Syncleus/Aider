app.controller('DetailsController', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.name = $stateParams.name;
}]);
