app.controller('dataModelController', ['$scope', function ($scope) {
    $scope.datapoints = [
        {
            "key": "educationMax",
            "description": "Highest level of education completed",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["none", "High School", "Associates", "Bachlors", "Masters", "PhD"]
        },
        {
            "key": "personalIncomeLevel",
            "description": "Individual's average income per year",
            "detailsVisible" : false,
            "type": "number",
            "rangeMin": 0,
        },
        {
            "key": "householdIncomeLevel",
            "description": "Household's average income per year",
            "detailsVisible" : false,
            "type": "number",
            "rangeMin": 0,
        },
        {
            "key": "race",
            "description" : "The race the individual identifies with",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["Caucasion", "African", "Hispanic", "Native American", "Other"]
        },
        {
            "key": "sex",
            "description" : "Self-identified sex of the individual",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["male", "female", "intersexed"]
        },
        {
            "key": "politicalParty",
            "description": "Registered political party affiliation",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["Democrat", "republican", "Libertarian", "Independent", "Other"]
        },
        {
            "key": "birthYear",
            "description": "The year the individual was born",
            "detailsVisible" : false,
            "type": "number",
            "rangeMax": 2015
        },
        {
            "key": "profession",
            "description": "Primary field of employment",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["Health Care", "Science", "Information Technology", "Service Industry", "Other"]
        },
        {
            "key": "countryOfResidency",
            "description": "Country the individual spends most of their time per year",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["United Stated of America", "Canada", "Mexico", "Other"]
        },
        {
            "key": "childrenCount",
            "description": "Number of children the individual has as a dependency",
            "detailsVisible" : false,
            "type": "number",
            "rangeMin": 0,
        },
        {
            "key": "maritalStatus",
            "description": "The individuals current relationship status",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["Single", "Married", "Seperated", "Widowed", "In relationship"]
        },
        {
            "key": "citizenship",
            "description": "Indicates the individuals citizenship status",
            "detailsVisible" : false,
            "type": "discrete",
            "states": ["Citizen", "Green Card Holder", "Visa Holder", "Other"]
        }
    ];

    $scope.selectDataModelKey = function(index) {
        $scope.datapoints[index].detailsVisible = !($scope.datapoints[index].detailsVisible);
    };

    $scope.selectAllDataModelKeys = function() {
        for( x in $scope.datapoints) {
            $scope.datapoints[x].detailsVisible = true;
        }
    };

    $scope.unselectAllDataModelKeys = function() {
        for( x in $scope.datapoints) {
            $scope.datapoints[x].detailsVisible = false;
        }
    };
}]);
