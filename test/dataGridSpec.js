describe('Data Grid', function () {
    beforeEach(module('dataGrid'));

    var $compile, $scope;
    beforeEach(inject(function (_$compile_, $rootScope) {
        $compile = _$compile_;
        $scope = $rootScope.$new();
    }));

    describe('title attribute', function () {
        it('should display a default title', function () {
            var element = $compile('<d-grid></d-grid>')($scope);
            expect(element.text()).toEqual('Data grid');
        });
    });
});