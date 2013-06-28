'use strict';

/* Services */

angular.module('alienMail.services', ['ngResource']).
    factory('Summaries', function($resource){
        return $resource('/summaries/summaries.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    });
