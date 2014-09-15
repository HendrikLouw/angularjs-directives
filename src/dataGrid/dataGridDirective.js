var app = angular.module('dataGrid', []);

app.directive('dGrid', function() {

    return  {
        restrict: 'EA',
        template:   '<ul class="data-grid">' +
                    '<h2>Data grid</h2>' +
                    '<ng-transclude></ng-transclude>' +
                    '</ul>'
    }
});


app.directive('dGridRow', function() {

    return  {
        restrict: 'EA',
        template: '<li>Data grid</li>'
    }
});


app.directive('dGridColumn', function() {

    return  {
        restrict: 'EA',
        template: '<h2>Data grid</h2>'
    }
});



