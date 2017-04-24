'use strict';

angular.module('previewApp.version', [
  'previewApp.version.interpolate-filter',
  'previewApp.version.version-directive'
])

.value('version', '0.1');
