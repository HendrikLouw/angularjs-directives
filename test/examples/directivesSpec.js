describe('Directive examples', function() {

    beforeEach(module('directives'));

    var $compile, $scope;
    beforeEach(inject(function (_$compile_, $rootScope) {
        $compile = _$compile_;
        $scope = $rootScope.$new();
    }));


    describe('restrict', function() {
        it('[A] should match an attribute name (by default)', function() {
            var element = $compile('<div attribute-directive></div>')($scope);
            expect(element.text()).toEqual('New element from attribute text');
        });

        it('[E] should match an element name', function() {
            var element = $compile('<element-directive></element-directive>')($scope);
            expect(element.text()).toEqual('New element text');
        });

        it('[C] should match a class name', function() {
            var element = $compile('<div class="class-directive"></div>')($scope);
            expect(element.text()).toEqual('New element from class text');
        });
    });

    describe('isolate scope', function() {
//        it('should bind the ')
    });
});