app.controller('analyzer.endpoints', ['$scope', 'analyzerNav', function ($scope, analyzerNav) {
    analyzerNav.navSelected = "endpoints";

    $scope.datapoints = [
        {
            "key": "educationMax",
            "description": "Highest level of education completed",
            "type": "discrete",
            "required": true,
            "states": ["none", "High School", "Associates", "Bachlors", "Masters", "PhD"]
        },
        {
            "key": "personalIncome",
            "description": "Individual's average income per year",
            "type": "number",
            "required": true,
            "rangeMin": 0,
        },
        {
            "key": "householdIncome",
            "description": "Household's average income per year",
            "type": "number",
            "required": true,
            "rangeMin": 0,
        },
        {
            "key": "race",
            "description" : "The race the individual identifies with",
            "type": "discrete",
            "states": ["Caucasion", "African", "Hispanic", "Native American", "Other"]
        },
        {
            "key": "sex",
            "description" : "Self-identified sex of the individual",
            "type": "discrete",
            "required": true,
            "states": ["male", "female", "intersexed"]
        },
        {
            "key": "politicalParty",
            "description": "Registered political party affiliation",
            "type": "discrete",
            "required": true,
            "states": ["Democrat", "Republican", "Libertarian", "Independent", "other"]
        },
        {
            "key": "birthYear",
            "description": "The year the individual was born",
            "type": "number",
            "required": true,
            "rangeMax": 2015
        },
        {
            "key": "profession",
            "description": "Primary field of employment",
            "type": "discrete",
            "required": true,
            "states": ["Health Care", "Science", "Information Technology", "Service Industry", "Other"]
        },
        {
            "key": "countryOfResidency",
            "description": "Country the individual spends most of their time per year",
            "type": "discrete",
            "required": true,
            "states": ["United Stated of America", "Canada", "Mexico", "Other"]
        },
        {
            "key": "childrenCount",
            "description": "Number of children the individual has as a dependency",
            "type": "number",
            "required": true,
            "rangeMin": 0,
        },
        {
            "key": "maritalStatus",
            "description": "The individuals current relationship status",
            "type": "discrete",
            "required": true,
            "states": ["Single", "Married", "Seperated", "Widowed", "In relationship"]
        },
        {
            "key": "citizenship",
            "description": "Indicates the individuals citizenship status",
            "type": "discrete",
            "required": true,
            "states": ["Citizen", "Green Card Holder", "Visa Holder", "Other"]
        }
    ];
}]);
