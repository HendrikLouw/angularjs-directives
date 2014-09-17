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
        priority: 10,
        restrict: 'E',
        require: '?ngModel',
        scope   : {
            locationName  : '@',
            location      : '=',
            updateLocation: '&'

        },
        template: '<h2>{{locationName}}: {{location}}</h2>' + 
        '<img src="{{location}}">' + 
        '<button type=submit class="primary" ng-click="updateLocation()">Why U No WoRk AngulaR??!!</button>'
    }
});

angular.module('directives').directive('replacer', function () {
    return {
        restrict: 'E',
        replace : true,
        template: '<p>This has been replaced by the replacerNaToR!</p>'
    }
});

angular.module('directives').directive('customPhoto', function () {
    return {
        priority: 1,
        restrict: 'E',
        link    : linkFn
    }

    function linkFn(scope, element, attrs, ngModel) {
        element.append('<p>Custom photo decorated</p>');

        element.on('mouseenter', function () {
            console.log("You're hovering on me");
        });

        element.on('$destroy', function() {
            element.unbind('mouseenter');
        });
    }
});


angular.module('directives').directive('transcluder', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<h2>Transcluder</h2><div ng-transclude></div>'
    }
});

//angular.module('directives').directive('timer', function ($interval, dateFilter) {
//    return {
//        link: linkFn()
//    }
//
//    function linkFn(scope, element, attrs) {
//        var format, timeoutId;
//
//        function updateTime() {
//            element.text(dateFilter(new Date(), format));
//        }
//
//        scope.$watch(attrs.myCurrentTime, function (value) {
//            format = value;
//            updateTime();
//        });
//
//        element.on('$destroy', function () {
//            $interval.cancel(timeoutId);
//        });
//
//        // start the UI update process; save the timeoutId for canceling
//        timeoutId = $interval(function () {
//            updateTime(); // update DOM
//        }, 1000);
//    }
//});
//
//
//
//
//
//
//
//
//
