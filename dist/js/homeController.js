app.controller('homeController', ['$scope', 'user', function ($scope, user) {
    // By default the 'text' property will be used as the display text in the dropdown entry.
    // All options that are not dividers must have a 'text' property.
    // You can specify a different property name in place of 'text' via the dropdown-item-label attribute.
    // A divider with a 'text' property will also be non-selectable.
    //
    // If an options object has an 'href' property set, then that dropdown entry
    //   will behave as a link and cannot be selected.
    $scope.ddSelectOptions = [
        {
            text: 'Jeffrey',
            href: "#/details/Jeffrey"
        },
        {
            text: 'Billy',
            href: "#/details/Billy"
        }
    ];

    $scope.ddSelectSelected = {}; // Must be an object
}]);
