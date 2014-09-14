var app = angular.module('dataGrid', []);

app.directive('dGrid', function() {

    return  {
        restrict: 'EA',
        template: '<h2>Data grid</h2>'
    }
});
