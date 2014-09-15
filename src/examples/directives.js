angular.module('directives', []);

// Restrict examples
angular.module('directives').directive('attributeDirective', function () {
    return {
        template: 'New element from attribute text'
    }
});

angular.module('directives').directive('elementDirective', function () {
    return {
        restrict: 'E',
        template: 'New element text'
    }
});

angular.module('directives').directive('classDirective', function () {
    return {
        restrict: 'C',
        template: 'New element from class text'
    }
});

// Isolate Scope examples
angular.module('directives').controller('FlickrController', function ($scope) {
    $scope.url = 'angularjs.jpeg';
    $scope.updateURL = function () {
        if ($scope.url === "angularjs.jpeg") {
            $scope.url = "buzzlight.jpg";
        } else {
            $scope.url = "angularjs.jpeg";
        }
    }
});

angular.module('directives').directive('customPhoto', function () {
    return {
        restrict: 'E',
        scope   : {
            locationName  : '@',
            location      : '=',
            updateLocation: '&'

        },
        template: '<h2>{{locationName}}: {{location}}</h2>' + '<img src="{{location}}">' + '<button type=submit class="primary" ng-click="updateLocation()">Why U No WoRk AngulaR??!!</button>'
    }
});

angular.module('directives').directive('replacer', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<p>This has been replaced by the replacer!</p>'
    }
});









