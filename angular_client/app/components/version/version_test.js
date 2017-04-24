'use strict';

describe('previewApp.version module', function() {
  beforeEach(module('previewApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
