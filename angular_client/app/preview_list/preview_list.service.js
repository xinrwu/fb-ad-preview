'use strict';

angular
    .module('previewApp.preview_list')
    .factory('PreviewList', ['$resource',
        function ($resource) {
            return $resource('http://127.0.0.1:8000/previews/', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ]);