'use strict';
// Connects to API backend to either get list of previews or send back a new preview
angular
    .module('preview')
    .factory('PreviewClient', ['$resource',
        function ($resource) {
            return $resource('http://127.0.0.1:8000/previews/', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                },
                save: {
                    method: 'POST'
                }
            });
        }
    ]);