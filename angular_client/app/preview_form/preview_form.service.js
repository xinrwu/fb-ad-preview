'use strict';
// Adds new preview
angular
    .module('previewApp.preview_form')
    .factory('PreviewForm', ['$resource',
        function ($resource) {
            return $resource('http://127.0.0.1:8000/previews/', {}, {
                save: {
                    method: 'POST'
                }
            });
        }
    ]);