angular.module('isolateScope', []);

angular.module('isolateScope').directive('echo', function() {
    return {
        restrict: 'E',
        scope: {},
        template: '<input type="text" ng-model="secret">' +
            '<p>{{secret}}</p>'

    }
});