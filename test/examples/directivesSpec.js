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
        it('should bind a controller variable to the isolateScope', function () {
            $controller('FlickrController', {
                $scope: $scope
            });

            var element = $compile('<div ng-controller="FlickrController"><photo></photo></div>')($scope);
            expect($scope.url).toEqual('skyphoto.jpg');
        });


    });
});