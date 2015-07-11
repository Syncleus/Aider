app.controller('dataModelController', ['$scope', function ($scope) {
    $scope.datapoints = [
        {
            "key": "educationMax",
            "description": "Highest level of education completed"
        },
        {
            "key": "personalIncomeLevel",
            "description": "Individual's average income per year"
        },
        {
            "key": "householdIncomeLevel",
            "description": "Household average income per year"
        },
        {
            "key": "race",
            "description" : "The race the individual identifies with"
        },
        {
            "key": "sex",
            "description" : "Self-identified sex of the individual"
        },
        {
            "key": "politicalParty",
            "description": "Registered political party affiliation"
        },
        {
            "key": "birthYear",
            "description": "The year the individual was born"
        },
        {
            "key": "profession",
            "description": "Primary field of employment"
        },
        {
            "key": "countryOfResidency",
            "description": "Country the individual spends most of their time per year"
        },
        {
            "key": "childrenCount",
            "description": "Number of children the individual has as a dependency"
        },
        {
            "key": "maritalStatus",
            "description": "The individuals current relationship status"
        },
        {
            "key": "citizenship",
            "description": "Indicates the individuals citizenship status"
        }
    ];
}]);
