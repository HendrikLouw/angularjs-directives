angular.module('isolateScope', []);

angular.module('isolateScope').directive('echo', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<input type="text" ng-model="secret">' +
            '<p ng-transclude>{{secret}}</p>'

    }
});