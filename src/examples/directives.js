angular.module('directives', []);

angular.module('directives').directive('attributeDirective', function() {
    return {
        template: 'New element from attribute text'
    }
});

angular.module('directives').directive('elementDirective', function() {
    return {
        restrict: 'E',
        template: 'New element text'
    }
});

angular.module('directives').directive('classDirective', function() {
    return {
        restrict: 'C',
        template: 'New element from class text'
    }
});