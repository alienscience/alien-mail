'use strict';

/* Services */

angular.module('alienMail.services', ['ngResource']).
    factory('Messages', function($resource){
        return $resource('/messages/:messageId.json', {}, {
            query: {method:'GET', params:{messageId:'summaries'}, isArray:true}
        });
    });
