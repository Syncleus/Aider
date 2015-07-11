app.controller('dataModelController', ['$scope', function ($scope) {
    $scope.datapoints = [
        {
            "key": "educationMax",
            "description": "Highest level of education completed",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "personalIncomeLevel",
            "description": "Individual's average income per year",
            "detailsVisible" : false,
            "type": "number"
        },
        {
            "key": "householdIncomeLevel",
            "description": "Household average income per year",
            "detailsVisible" : false,
            "type": "number"
        },
        {
            "key": "race",
            "description" : "The race the individual identifies with",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "sex",
            "description" : "Self-identified sex of the individual",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "politicalParty",
            "description": "Registered political party affiliation",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "birthYear",
            "description": "The year the individual was born",
            "detailsVisible" : false,
            "type": "number"
        },
        {
            "key": "profession",
            "description": "Primary field of employment",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "countryOfResidency",
            "description": "Country the individual spends most of their time per year",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "childrenCount",
            "description": "Number of children the individual has as a dependency",
            "detailsVisible" : false,
            "type": "number"
        },
        {
            "key": "maritalStatus",
            "description": "The individuals current relationship status",
            "detailsVisible" : false,
            "type": "discrete"
        },
        {
            "key": "citizenship",
            "description": "Indicates the individuals citizenship status",
            "detailsVisible" : false,
            "type": "discrete"
        }
    ];
}]);
