angular.module('isolateScope', []);

angular.module('isolateScope').directive('echo', function() {
    return {
        restrict: 'E',
        template: '<input ng-model="secret">' +
            '<p>{{secret}}</p>'

    }
});