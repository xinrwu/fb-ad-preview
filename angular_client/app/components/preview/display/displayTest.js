describe('component: previewDisplay', function () {
    var $componentController;
    var rootScope;

    beforeEach(module('preview.list'));
    
    beforeEach(inject(function (_$componentController_, _$rootScope_) {
        $componentController = _$componentController_;
        rootScope = _$rootScope_;
    }));

    it('should call `` when want to display preview', function () {
        var displayPreviewSpy = jasmine.createSpy('displayPreview');
        var bindings = {
            preview: {},
            displayPreview: displayPreviewSpy
        };
        var ctrl = $componentController('previewList', null, bindings);
        ctrl.onDisplay();
        expect(displayPreviewSpy).toHaveBeenCalledWith({});
    });
});

it('should ', function () {

});