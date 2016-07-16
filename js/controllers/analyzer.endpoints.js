app.controller('analyzer.endpoints', ['$scope', 'analyzerNav', '$parse', function ($scope, analyzerNav, $parse) {
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
            "required": false,
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
            "required": false,
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
            "required": false,
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

    $scope.prettyDatapointsReceiverExample = function() {
        var datapointsJson = "{";
        for( x in $scope.datapoints ) {
            datapointsJson += "\"" + $scope.datapoints[x].key + "\" : \"" + exampleDatapointValue($scope.datapoints[x]) + "\",";
        }
        datapointsJson += "}";

        return toPrettyJSON(datapointsJson, 4);
    };

    $scope.prettySuccessResponseExample = function() {
        var successJson = "{\"responseMessage\" : \"Execution completed in 0.054 seconds\"}";
        return toPrettyJSON(successJson, 4);
    };

    $scope.prettyInsightExample = function() {
        var insightJson = "{\"given\": {\"educationMax\": \"Masters\",\"birthYear\": \"1980\"},\"target\": \"personalIncome > 100000 && politicalParty = Democrat\"}";
        return toPrettyJSON(insightJson, 4);
    }

    $scope.prettyDiscoveryCreation = function() {
        var discoveryCreationJson = "{\"name\":\"highIncomeConservatives\",\"Description\":\"Customers with highest probability of being high-income conservatives.\",\"filter\":\"educationMax=(Masters|PhD)&&age>=18\",\"target\":\"personalIncome > 10000 && politicalParty == (Republican | Libertarian)\",\"capacity\":100,\"historyDepth\":1000}";
        return toPrettyJSON(discoveryCreationJson, 4);
    }

    $scope.prettySuccessResponseInsightExample = function() {
        var successJson = "{\"responseMessage\" : \"Execution completed in 0.032 seconds\", \"probability\": \"0.89\"}";
        return toPrettyJSON(successJson, 4);
    };

    toPrettyJSON = function (jsonStr, tabWidth) {
        var parsedStr = $parse(jsonStr)({});
        var result = JSON.stringify(parsedStr, null, Number(tabWidth));
        return result;
    };

    exampleDatapointValue = function(datapoint) {
        if(datapoint.type == "discrete") {
            return datapoint.states[0];
        }

        if(datapoint.type == "number") {
            if(datapoint.rangeMin != null) {
                return datapoint.rangeMin;
            }
            else if(datapoint.rangeMax != null) {
                return datapoint.rangeMax;
            }
            else {
                return 0;
            }
        }
    };
}]);
