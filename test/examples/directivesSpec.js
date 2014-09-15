describe('Directive examples', function () {

    beforeEach(module('directives'));

    var $compile, $scope, $controller;
    beforeEach(inject(function (_$compile_, $rootScope, _$controller_) {
        $compile = _$compile_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    describe('restrict', function () {
        it('[A] should match an attribute name (by default)', function () {
            var element = $compile('<div attribute-directive></div>')($scope);
            expect(element.text()).toEqual('New element from attribute text');
        });

        it('[E] should match an element name', function () {
            var element = $compile('<element-directive></element-directive>')($scope);
            expect(element.text()).toEqual('New element text');
        });

        it('[C] should match a class name', function () {
            var element = $compile('<div class="class-directive"></div>')($scope);
            expect(element.text()).toEqual('New element from class text');
        });
    });

    describe('isolate scope', function () {
        it('should have different ways of binding a variable to the directives isolateScope', function () {
            $controller('FlickrController', {
                $scope: $scope
            });

            var markup = angular.element('<div ng-controller="FlickrController">' + '<custom-photo location="url" location-name="url" update-location="updateURL()"></custom-photo>' + '</div>');

            $compile(markup)($scope);

            var element = markup.find('custom-photo');

            var directiveScope = element.isolateScope();

            expect($scope.url).toEqual('angularjs.jpeg');
            expect(directiveScope.locationName).toEqual('url');
            expect(directiveScope.location).toEqual($scope.url);

            directiveScope.updateLocation();
            $scope.$digest();
            expect(directiveScope.location).toEqual('buzzlight.jpg');

        });
    });

    describe('replace', function () {
        it('should replace the directive container with the directive template', function () {
            var element = '<replacer></replacer>';
            var result = $compile(element)($scope);
            expect(result[0].outerHTML).toEqual('<p class="ng-scope">This has been replaced by the replacerNaToR!</p>');
        });
    });

    describe('link function', function() {
        var element = '<linker></linker>';
        $compile(element)($scope);
        expect()
    });
});