app.controller('analyzer', ['$scope', function ($scope) {
    $scope.navSelected = "dataModel";

    $scope.selectNav = function(newNav) {
        $scope.navSelected = newNav;
    };
}]);
