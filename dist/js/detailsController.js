app.controller('detailsController', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.name = $stateParams.name;
}]);
